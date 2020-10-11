/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-02 18:31:59
 * @LastEditTime: 2020-09-04 18:47:55
 * @FilePath: /Hui/rui/src/views/stepview/code.ts
 */
const code1: string = `<r-steps :active="active" finish-status="success">
  <r-step title="步骤 1"></r-step>
  <r-step title="步骤 2"></r-step>
  <r-step title="步骤 3"></r-step>
</r-steps>
<r-btn style="margin-top: 12px;" @click="next">下一步</r-btn>
<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
`;
const code2: string = `<r-steps :space="200" :active="active" finish-status="success">
  <r-step title="已完成"></r-step>
  <r-step title="进行中"></r-step>
  <r-step title="步骤 3"></r-step>
</r-steps>
<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
`;
const code3: string = `<r-steps :active="active">
  <r-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></r-step>
  <r-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></r-step>
  <r-step title="步骤 3" description="这段就没那么长了"></r-step>
</r-steps>
<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
`;
const code4: string = `<r-steps :active="active" align-center>
  <r-step title="步骤1" description="这是一段很长很长很长的描述性文字"></r-step>
  <r-step title="步骤2" description="这是一段很长很长很长的描述性文字"></r-step>
  <r-step title="步骤3" description="这是一段很长很长很长的描述性文字"></r-step>
</r-steps>
<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
`;
const code5: string = `<r-steps :active="active">
  <r-step title="步骤 1" icon="el-icon-edit"></r-step>
  <r-step title="步骤 2" icon="el-icon-upload"></r-step>
  <r-step title="步骤 3" icon="el-icon-picture"></r-step>
</r-steps>
<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
`;
const code6: string = `<r-steps direction="vertical" :active="active">
  <r-step title="步骤 1"></r-step>
  <r-step title="步骤 2"></r-step>
  <r-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></r-step>
</r-steps>
<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
`;
const code7: string = `<r-steps :active="active" simple>
  <r-step title="步骤 1" icon="el-icon-edit"></r-step>
  <r-step title="步骤 2" icon="el-icon-upload"></r-step>
  <r-step title="步骤 3" icon="el-icon-picture"></r-step>
</r-steps>
<r-steps
  :active="active"
  finish-status="success"
  description="vertical"
  simple
  style="margin-top: 20px">
  <r-step title="步骤 1"></r-step>
  <r-step title="步骤 2"></r-step>
  <r-step title="步骤 3"></r-step>
</r-steps><script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
`;

export default {
  code1,
  code2,
  code3,
  code4,
  code5,
  code6,
  code7
};
