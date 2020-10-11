<template>
    <div>
        <table cellspacing="0" cellpadding="0" class="r-calendar-table">
            <thead>
                <th v-for="(day, index) in weekDays" :key="index">{{ day }}</th>
            </thead>
            <tbody>
                <tr v-for="(row, index) in rows" :key="index">
                    <td
                        v-for="(cell, key) in row"
                        :key="key"
                        :class="getCellClass(cell)"
                        @click="pickDay(cell)"
                    >
                        <div class="r-calendar-day">
                            <span>{{ cell.text }}</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import {
    range as rangeArr,
    getFirstDayOfMonth,
    getPrevMonthLastDays,
    getMonthDays // 获取本月所有天，数组形式
} from '../calendar/main'
import fecha from '../calendar/date'

export default {
    name: 'r-date-table',
    inject: ['rCalendar'],
    props: {
        selectedDay: String,
        date: Date,
        hideHeader: Boolean,
        firstDayOfWeek: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            today: new Date()
        }
    },
    computed: {
        // 6行7列
        rows() {
            let days = []
            const date = this.date
            let firstDay = getFirstDayOfMonth(date) // 当月第一天周几
            firstDay = firstDay === 0 ? 7 : firstDay // 如果周日要转成7
            const lastMonthDays = getPrevMonthLastDays(date, firstDay - 1).map(
                (day) => ({
                    text: day,
                    type: 'prev'
                })
            )
            const currentMonthDays = getMonthDays(date).map((day) => ({
                text: day,
                type: 'current'
            }))
            days = [...lastMonthDays, ...currentMonthDays]
            const nextMonthDays = rangeArr(42 - days.length).map(
                (value, index) => ({
                    text: index + 1,
                    type: 'next'
                })
            )
            days = days.concat(nextMonthDays)
            return this.toNestedArr(days)
        },
        weekDays() {
            return ['一', '二', '三', '四', '五', '六', '日']
        },
        // 当前切换月
        curMonthDatePrefix() {
            return fecha.format(this.date, 'yyyy-MM')
        },
        // 上个月第一天
        prevMonthDatePrefix() {
            const temp = new Date(this.date.getTime())
            temp.setDate(0)
            return fecha.format(temp, 'yyyy-MM')
        },
        // 下个月第一天
        nextMonthDatePrefix() {
            const temp = new Date(
                this.date.getFullYear(),
                this.date.getMonth() + 1,
                1
            )
            return fecha.format(temp, 'yyyy-MM')
        }
    },

    methods: {
        toNestedArr(days) {
            return rangeArr(days.length / 7).map((item, index) => {
                const start = index * 7
                return days.slice(start, start + 7)
            })
        },
        getCellClass({ text, type }) {
            const classes = [type]
            if (type === 'current') {
                const date = this.getFormateDate(text, type)
                if (date === this.selectedDay) {
                    classes.push('is-selected')
                }
                if (date === this.todayyyyyMMdd()) {
                    classes.push('is-today')
                }
            }
            return classes
        },
        getFormateDate(day, type) {
            let prefix = this.curMonthDatePrefix
            if (type === 'prev') {
                prefix = this.prevMonthDatePrefix
            } else if (type === 'next') {
                prefix = this.nextMonthDatePrefix
            }
            day = `00${day}`.slice(-2)
            return `${prefix}-${day}`
        },
        todayyyyyMMdd() {
            return fecha.format(this.today, 'yyyy-MM-dd')
        },
        pickDay({ text, type }) {
            const date = this.getFormateDate(text, type)
            this.$emit('pick', date)
        }
    }
}
</script>
<style lang="scss">
.r-calendar-table {
    table-layout: fixed;
    width: 100%;
    thead th {
        padding: 12px 0;
        color: #606266;
        font-weight: 400;
    }
    td {
        border-bottom: 1px solid #ebeef5;
        border-right: 1px solid #ebeef5;
        vertical-align: top;
        cursor: pointer;
        &:hover {
            background-color: #f2f8fe;
        }
    }
    td.is-today {
        color: #409eff;
    }
    td.is-selected {
        background-color: #f2f8fe;
        color: #409eff;
    }
    tr:first-child td {
        border-top: 1px solid #ebeef5;
    }
    tr td:first-child {
        border-left: 1px solid #ebeef5;
    }
    td.prev,
    td.next {
        color: #c0c4cc;
    }
    .r-calendar-day {
        box-sizing: border-box;
        padding: 8px;
        height: 85px;
    }
}
</style>
