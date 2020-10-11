<template>
    <div>
        <div class="r-calendar__header">
            <div class="r-calendar__title">{{ text() }}</div>
            <r-btngroup>
                <r-btn
                    type="plain"
                    size="mini"
                    @click="selectDate('prev-month')"
                    >上个月</r-btn
                >
                <r-btn type="plain" size="mini" @click="selectDate('today')"
                    >今天</r-btn
                >
                <r-btn
                    type="plain"
                    size="mini"
                    @click="selectDate('next-month')"
                    >下个月</r-btn
                >
            </r-btngroup>
        </div>
        <r-date-table
            :date="now"
            :selected-day="realSelectedDay"
            @pick="pickDay"
        ></r-date-table>
    </div>
</template>

<script>
import rDateTable from '../calendar/DateTable'
import rBtngroup from '../button/ButtonGroup'
import rBtn from '../button/Button'
import fecha from '../calendar/date'

export default {
    name: 'r-calendar',
    components: {
        rDateTable,
        rBtngroup,
        rBtn
    },
    provide() {
        return {
            rCalendar: this
        }
    },
    props: {
        value: {
            type: [Date, String, Number]
        }
    },
    data() {
        return {
            now: new Date() // 当前选中的日期（初始为当天，上一月下一月均为日期第一天）
        }
    },
    computed: {
        realSelectedDay: {
            get() {
                return fecha.format(new Date(this.value), 'yyyy-MM-dd')
            },
            set(val) {
                const date = new Date(val)
                this.$emit('input', date)
            }
        }
    },
    methods: {
        text() {
            const year = this.now.getFullYear()
            const month = this.now.getMonth() + 1
            return `${year} 年 ${month} 月`
        }, // 日历的text
        getNextMonth(date) {
            const temp = new Date(date.getFullYear(), date.getMonth() + 1, 1)
            return temp
        }, // 获取下个月第一天
        getPrevMonth(date) {
            const temp = new Date(date.getFullYear(), date.getMonth() - 1, 1)
            return temp
        }, // 获取上个月第一天
        selectDate(type) {
            let today = new Date()
            let rightnow = this.now
            if (type === 'prev-month') {
                this.now = this.getPrevMonth(rightnow)
            } else if (type === 'next-month') {
                this.now = this.getNextMonth(rightnow)
            } else {
                this.now = today
            }
            this.pickDay(this.now)
        },
        pickDay(day) {
            this.realSelectedDay = day
            this.now = new Date(day)
        }
    }
}
</script>

<style lang="scss">
@import '../../scss/var';
@import '../../scss/mixin';

.r-calendar__header {
    display: flex;
    justify-content: space-between;
    padding: 12px 20px;
    border-bottom: 1px solid #ebeef5;
    .r-calendar__title {
        color: #000;
        align-self: center;
    }
}
</style>
