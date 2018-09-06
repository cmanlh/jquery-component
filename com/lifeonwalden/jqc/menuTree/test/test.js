$JqcLoader.importScript('../../../../../qunit/jquery-3.1.1.js')
    .importScript('../../../../../qunit/version.js')
    .importScript('../../../../../qunit/keycode.js')
    .importScript('../../../../../qunit/qunit-2.1.1.js')
    .importCss('../../../../../qunit/qunit-2.1.1.css').execute(function () {
        $JqcLoader.registerModule($JqcLoader.newModule('com.lifeonwalden.jqc', '../../../../../')
            .registerComponent('baseElement')
            .registerComponent('resizeable')
            .registerComponent('uniqueKey')
            .registerComponent('lang')
            .registerComponent('dialog')
            .registerComponent('blocker')
            .registerComponent('zindex')
            .registerComponent('menuTree')
            .registerComponent('draggable'));

        $JqcLoader.importComponents('com.lifeonwalden.jqc', ['menuTree']).execute(function () {

            var res = '{"code":"0","msg":"success","result":{"pinned":[{"id":"D8111A5BDCD443329718237EF08EC799","name":"权限管理","orderNum":100,"sysId":"OPS","createTime":"1527472093720","createUser":"luhong","updateTime":"1532583759413","updateUser":"xuke","logicalDel":0,"subMenuList":[{"id":"5c522dc2a905406a999460b76a3c4a41","name":"角色管理","parentId":"D8111A5BDCD443329718237EF08EC799","orderNum":1,"form":"ops/admin/auth/roleManage/roleManage.js","sysId":"OPS","createTime":"1527645004170","createUser":"xuke","updateTime":"1527649960163","updateUser":"xuke","logicalDel":0},{"id":"CD3B6D4520C24EB8BC6F6DAC41906325","name":"菜单管理","parentId":"D8111A5BDCD443329718237EF08EC799","orderNum":2,"form":"ops/admin/auth/menu/menu.js","sysId":"OPS","createTime":"1527472434680","createUser":"luhong","updateTime":"1527645090257","updateUser":"xuke","logicalDel":0},{"id":"0dcd4d8a8713451aaf6a2198551eaa15","name":"服务管理","parentId":"D8111A5BDCD443329718237EF08EC799","orderNum":3,"form":"ops/admin/auth/ServiceResource/ServiceResource.js","sysId":"OPS","createTime":"1527659021360","createUser":"xuke","updateTime":"1527659406383","updateUser":"xuke","logicalDel":0},{"id":"e9348decf0624b35979d4ce4d23bc4c4","name":"用户管理","parentId":"D8111A5BDCD443329718237EF08EC799","orderNum":4,"form":"ops/admin/auth/userManage/userManage.js","sysId":"OPS","createTime":"1527659590493","createUser":"xuke","updateTime":"1527659590493","updateUser":"xuke","logicalDel":0},{"id":"781c967a931d4622ad013b46ee2e15ce","name":"系统管理","parentId":"D8111A5BDCD443329718237EF08EC799","orderNum":5,"form":"ops/admin/auth/systemManage/systemManage.js","sysId":"OPS","createTime":"1528271541310","createUser":"xuke","updateTime":"1528271541310","updateUser":"xuke","logicalDel":0}]},{"id":"D395A8BA3F7E4005A80A5B7BB682A460","name":"任务调度","orderNum":200,"sysId":"OPS","createTime":"1525864864690","createUser":"luhong","updateTime":"1532583775060","updateUser":"xuke","logicalDel":0,"subMenuList":[{"id":"57DF62ED65154A42B3DBB3E0C33921FF","name":"工作单元管理","parentId":"D395A8BA3F7E4005A80A5B7BB682A460","orderNum":110,"form":"ops/admin/job/work/work.js","sysId":"OPS","createTime":"1525865898393","createUser":"luhong","updateTime":"1528250276407","updateUser":"xuke","logicalDel":0},{"id":"15F4B56F41C240CDB27C583816F39957","name":"工作运行历史","parentId":"D395A8BA3F7E4005A80A5B7BB682A460","orderNum":120,"form":"ops/admin/job/workHistory/workHistory.js","sysId":"OPS","createTime":"1525926409013","createUser":"luhong","updateTime":"1525926409013","updateUser":"luhong","logicalDel":0},{"id":"25BAC46FAA9048849F057D06BB37A6DE","name":"任务管理","parentId":"D395A8BA3F7E4005A80A5B7BB682A460","orderNum":130,"form":"ops/admin/job/task/task.js","sysId":"OPS","createTime":"1526616021717","createUser":"luhong","updateTime":"1526616021717","updateUser":"luhong","logicalDel":0},{"id":"96B491C6D8114C64A4366BA583628290","name":"任务运行历史","parentId":"D395A8BA3F7E4005A80A5B7BB682A460","orderNum":140,"form":"ops/admin/job/taskHistory/taskHistory.js","sysId":"OPS","createTime":"1527213128983","createUser":"luhong","updateTime":"1527213128983","updateUser":"luhong","logicalDel":0},{"id":"468F960C598B484498F4E6B445A68CE6","name":"触发器","parentId":"D395A8BA3F7E4005A80A5B7BB682A460","orderNum":150,"form":"ops/admin/job/trigger/trigger.js","sysId":"OPS","createTime":"1527213028247","createUser":"luhong","updateTime":"1527213028247","updateUser":"luhong","logicalDel":0}]},{"id":"2430f5e944bc46a8af8d64363acc026c","name":"推送监管","orderNum":300,"sysId":"OPS","createTime":"1531114057660","createUser":"xuke","updateTime":"1532583768883","updateUser":"xuke","logicalDel":0,"subMenuList":[{"id":"3ba6f666b1c3424198aa62b430b37980","name":"TB_INFA_PUSH","parentId":"2430f5e944bc46a8af8d64363acc026c","orderNum":100,"form":"ops/admin/dcetl/TB_INFA_PUSH/TB_INFA_PUSH.js","sysId":"OPS","createTime":"1531114126913","createUser":"xuke","updateTime":"1531115562713","updateUser":"xuke","logicalDel":0},{"id":"5e130fc77b744140ad9b108952353c3a","name":"TB_INFA_PUSH_INFO","parentId":"2430f5e944bc46a8af8d64363acc026c","orderNum":150,"form":"ops/admin/dcetl/TB_INFA_PUSH_INFO/TB_INFA_PUSH_INFO.js","sysId":"OPS","createTime":"1531115076713","createUser":"xuke","updateTime":"1531115587250","updateUser":"xuke","logicalDel":0}]},{"id":"f820ee3a845942bc8cb7a38568a481f7","name":"访问监测","orderNum":400,"sysId":"OPS","createTime":"1533865042177","createUser":"xuke","updateTime":"1533865070137","updateUser":"xuke","logicalDel":0,"subMenuList":[{"id":"97bc5ea6feef4c2abebf8c5c949c7c20","name":"访问监测","parentId":"f820ee3a845942bc8cb7a38568a481f7","orderNum":10,"form":"ops/admin/monitor/auditRecord/auditRecord.js","sysId":"OPS","createTime":"1533865247923","createUser":"xuke","updateTime":"1533867986093","updateUser":"xuke","logicalDel":0},{"id":"97662dd403764c12b18b030793040415","name":"测试代码生成","parentId":"f820ee3a845942bc8cb7a38568a481f7","orderNum":20,"form":"ops/admin/monitor/test/departmentInfo.js","sysId":"OPS","createTime":"1534382290357","createUser":"xuke","updateTime":"1534382290357","updateUser":"xuke","logicalDel":0}]},{"id":"f8cc79265973485e9b1ebef41dc57550","name":"元数据管理","orderNum":500,"sysId":"OPS","createTime":"1534469487727","createUser":"xuke","updateTime":"1534469487727","updateUser":"xuke","logicalDel":0,"subMenuList":[{"id":"816299bf97154b959840d0a2677484ef","name":"元数据管理","parentId":"f8cc79265973485e9b1ebef41dc57550","orderNum":10,"form":"ops/admin/opsMeta/opsMeta.js","sysId":"OPS","createTime":"1534469615000","createUser":"xuke","updateTime":"1534469615000","updateUser":"xuke","logicalDel":0}]},{"id":"72d53ad7be484267b07cc2f0e6dd113c","name":"TEST","orderNum":1000,"sysId":"OPS","createTime":"1534494813327","createUser":"xuke","updateTime":"1534494813327","updateUser":"xuke","logicalDel":0,"subMenuList":[{"id":"44a5cb6bc327488aae881af01185700f","name":"test2","parentId":"72d53ad7be484267b07cc2f0e6dd113c","orderNum":100,"sysId":"OPS","createTime":"1534494833877","createUser":"xuke","updateTime":"1534494833877","updateUser":"xuke","logicalDel":0,"subMenuList":[{"id":"5f43d5177a0c497e984a0768290f76ee","name":"test3","parentId":"44a5cb6bc327488aae881af01185700f","orderNum":3,"sysId":"OPS","createTime":"1534494859190","createUser":"xuke","updateTime":"1534494859190","updateUser":"xuke","logicalDel":0},{"id":"27cde072b81846f8a2d2e203857831aa","name":"超过九个字要换行超过要换行","parentId":"44a5cb6bc327488aae881af01185700f","orderNum":4,"sysId":"OPS","createTime":"1534494876003","createUser":"xuke","updateTime":"1534494876003","updateUser":"xuke","logicalDel":0}]},{"id":"d00df2c7737044f1a69922cba8ccb28f","name":"test22","parentId":"72d53ad7be484267b07cc2f0e6dd113c","orderNum":100,"sysId":"OPS","createTime":"1534494844393","createUser":"xuke","updateTime":"1534494844393","updateUser":"xuke","logicalDel":0}]}],"authorized":[{"id":"D8111A5BDCD443329718237EF08EC799","name":"权限管理","orderNum":100,"sysId":"OPS","createTime":"1527472093720","createUser":"luhong","updateTime":"1532583759413","updateUser":"xuke","logicalDel":0,"subMenuList":[{"id":"5c522dc2a905406a999460b76a3c4a41","name":"角色管理","parentId":"D8111A5BDCD443329718237EF08EC799","orderNum":1,"form":"ops/admin/auth/roleManage/roleManage.js","sysId":"OPS","createTime":"1527645004170","createUser":"xuke","updateTime":"1527649960163","updateUser":"xuke","logicalDel":0},{"id":"CD3B6D4520C24EB8BC6F6DAC41906325","name":"菜单管理","parentId":"D8111A5BDCD443329718237EF08EC799","orderNum":2,"form":"ops/admin/auth/menu/menu.js","sysId":"OPS","createTime":"1527472434680","createUser":"luhong","updateTime":"1527645090257","updateUser":"xuke","logicalDel":0},{"id":"0dcd4d8a8713451aaf6a2198551eaa15","name":"服务管理","parentId":"D8111A5BDCD443329718237EF08EC799","orderNum":3,"form":"ops/admin/auth/ServiceResource/ServiceResource.js","sysId":"OPS","createTime":"1527659021360","createUser":"xuke","updateTime":"1527659406383","updateUser":"xuke","logicalDel":0},{"id":"e9348decf0624b35979d4ce4d23bc4c4","name":"用户管理","parentId":"D8111A5BDCD443329718237EF08EC799","orderNum":4,"form":"ops/admin/auth/userManage/userManage.js","sysId":"OPS","createTime":"1527659590493","createUser":"xuke","updateTime":"1527659590493","updateUser":"xuke","logicalDel":0},{"id":"781c967a931d4622ad013b46ee2e15ce","name":"系统管理","parentId":"D8111A5BDCD443329718237EF08EC799","orderNum":5,"form":"ops/admin/auth/systemManage/systemManage.js","sysId":"OPS","createTime":"1528271541310","createUser":"xuke","updateTime":"1528271541310","updateUser":"xuke","logicalDel":0}]},{"id":"D395A8BA3F7E4005A80A5B7BB682A460","name":"任务调度","orderNum":200,"sysId":"OPS","createTime":"1525864864690","createUser":"luhong","updateTime":"1532583775060","updateUser":"xuke","logicalDel":0,"subMenuList":[{"id":"57DF62ED65154A42B3DBB3E0C33921FF","name":"工作单元管理","parentId":"D395A8BA3F7E4005A80A5B7BB682A460","orderNum":110,"form":"ops/admin/job/work/work.js","sysId":"OPS","createTime":"1525865898393","createUser":"luhong","updateTime":"1528250276407","updateUser":"xuke","logicalDel":0},{"id":"15F4B56F41C240CDB27C583816F39957","name":"工作运行历史","parentId":"D395A8BA3F7E4005A80A5B7BB682A460","orderNum":120,"form":"ops/admin/job/workHistory/workHistory.js","sysId":"OPS","createTime":"1525926409013","createUser":"luhong","updateTime":"1525926409013","updateUser":"luhong","logicalDel":0},{"id":"25BAC46FAA9048849F057D06BB37A6DE","name":"任务管理","parentId":"D395A8BA3F7E4005A80A5B7BB682A460","orderNum":130,"form":"ops/admin/job/task/task.js","sysId":"OPS","createTime":"1526616021717","createUser":"luhong","updateTime":"1526616021717","updateUser":"luhong","logicalDel":0},{"id":"96B491C6D8114C64A4366BA583628290","name":"任务运行历史","parentId":"D395A8BA3F7E4005A80A5B7BB682A460","orderNum":140,"form":"ops/admin/job/taskHistory/taskHistory.js","sysId":"OPS","createTime":"1527213128983","createUser":"luhong","updateTime":"1527213128983","updateUser":"luhong","logicalDel":0},{"id":"468F960C598B484498F4E6B445A68CE6","name":"触发器","parentId":"D395A8BA3F7E4005A80A5B7BB682A460","orderNum":150,"form":"ops/admin/job/trigger/trigger.js","sysId":"OPS","createTime":"1527213028247","createUser":"luhong","updateTime":"1527213028247","updateUser":"luhong","logicalDel":0}]},{"id":"2430f5e944bc46a8af8d64363acc026c","name":"推送监管","orderNum":300,"sysId":"OPS","createTime":"1531114057660","createUser":"xuke","updateTime":"1532583768883","updateUser":"xuke","logicalDel":0,"subMenuList":[{"id":"3ba6f666b1c3424198aa62b430b37980","name":"TB_INFA_PUSH","parentId":"2430f5e944bc46a8af8d64363acc026c","orderNum":100,"form":"ops/admin/dcetl/TB_INFA_PUSH/TB_INFA_PUSH.js","sysId":"OPS","createTime":"1531114126913","createUser":"xuke","updateTime":"1531115562713","updateUser":"xuke","logicalDel":0},{"id":"5e130fc77b744140ad9b108952353c3a","name":"TB_INFA_PUSH_INFO","parentId":"2430f5e944bc46a8af8d64363acc026c","orderNum":150,"form":"ops/admin/dcetl/TB_INFA_PUSH_INFO/TB_INFA_PUSH_INFO.js","sysId":"OPS","createTime":"1531115076713","createUser":"xuke","updateTime":"1531115587250","updateUser":"xuke","logicalDel":0}]},{"id":"f820ee3a845942bc8cb7a38568a481f7","name":"访问监测","orderNum":400,"sysId":"OPS","createTime":"1533865042177","createUser":"xuke","updateTime":"1533865070137","updateUser":"xuke","logicalDel":0,"subMenuList":[{"id":"97bc5ea6feef4c2abebf8c5c949c7c20","name":"访问监测","parentId":"f820ee3a845942bc8cb7a38568a481f7","orderNum":10,"form":"ops/admin/monitor/auditRecord/auditRecord.js","sysId":"OPS","createTime":"1533865247923","createUser":"xuke","updateTime":"1533867986093","updateUser":"xuke","logicalDel":0},{"id":"97662dd403764c12b18b030793040415","name":"测试代码生成","parentId":"f820ee3a845942bc8cb7a38568a481f7","orderNum":20,"form":"ops/admin/monitor/test/departmentInfo.js","sysId":"OPS","createTime":"1534382290357","createUser":"xuke","updateTime":"1534382290357","updateUser":"xuke","logicalDel":0}]},{"id":"f8cc79265973485e9b1ebef41dc57550","name":"元数据管理","orderNum":500,"sysId":"OPS","createTime":"1534469487727","createUser":"xuke","updateTime":"1534469487727","updateUser":"xuke","logicalDel":0,"subMenuList":[{"id":"816299bf97154b959840d0a2677484ef","name":"元数据管理","parentId":"f8cc79265973485e9b1ebef41dc57550","orderNum":10,"form":"ops/admin/opsMeta/opsMeta.js","sysId":"OPS","createTime":"1534469615000","createUser":"xuke","updateTime":"1534469615000","updateUser":"xuke","logicalDel":0}]},{"id":"72d53ad7be484267b07cc2f0e6dd113c","name":"TEST","orderNum":1000,"sysId":"OPS","createTime":"1534494813327","createUser":"xuke","updateTime":"1534494813327","updateUser":"xuke","logicalDel":0,"subMenuList":[{"id":"44a5cb6bc327488aae881af01185700f","name":"test2","parentId":"72d53ad7be484267b07cc2f0e6dd113c","orderNum":100,"sysId":"OPS","createTime":"1534494833877","createUser":"xuke","updateTime":"1534494833877","updateUser":"xuke","logicalDel":0,"subMenuList":[{"id":"5f43d5177a0c497e984a0768290f76ee","name":"test3","parentId":"44a5cb6bc327488aae881af01185700f","orderNum":3,"sysId":"OPS","createTime":"1534494859190","createUser":"xuke","updateTime":"1534494859190","updateUser":"xuke","logicalDel":0},{"id":"27cde072b81846f8a2d2e203857831aa","name":"超过九个字要换行超过要换行","parentId":"44a5cb6bc327488aae881af01185700f","orderNum":4,"sysId":"OPS","createTime":"1534494876003","createUser":"xuke","updateTime":"1534494876003","updateUser":"xuke","logicalDel":0}]},{"id":"d00df2c7737044f1a69922cba8ccb28f","name":"test22","parentId":"72d53ad7be484267b07cc2f0e6dd113c","orderNum":100,"sysId":"OPS","createTime":"1534494844393","createUser":"xuke","updateTime":"1534494844393","updateUser":"xuke","logicalDel":0}]}]}}';
            var data = JSON.parse(res);
            
            var menu = new $.jqcMenuTree({
                data: data.result.pinned || [],
                // data: configurableMenuData,
                top: 60,
                left: 0,
                // autoSkip: false,
                allowedConfig: true,
                // displayed: false,
                // triggerFirst: true,
                width: 200,
                // autoHide: false,
                configBoxWidth: 1100,
                trigger: $('.btn'),
                configurableMenuData: data.result.authorized || [],
                // configurableMenuData: configurableMenuData,
                adapter: {
                    id: 'id',
                    label: 'name',
                    child: 'subMenuList'
                },
                onSelect: function(menu) {
                    var _menu = {
                        id: menu.id,
                        text: menu.name,
                        url: menu.form
                    };
                    console.log(menu);
                    // $.addForm(_menu, tab);
                },
                onResettingMenu: function(menu) {
                    console.log(menu);
                }
            });
            // var menu = new $.jqcMenuTree({
            //     data: data,
            //     top: 60,
            //     left: 0,
            //     width: 200,
            //     autoHide: false,
            //     // autoSkip: false,
            //     allowedConfig: true,
            //     configBoxWidth: 600,
            //     configurableMenuData: configurableMenuData,
            //     onSelect: function (menu) {
            //         console.log(menu);
            //     },
            //     onResettingMenu: function (menu) {
            //         console.log(menu);
            //     }
            // });
            // window.a = menu;
            // window.b = data;
            // console.log(data);
        });
    });