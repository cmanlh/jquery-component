$JqcLoader.importScript('../../../../../qunit/jquery-3.1.1.js')
    .importScript('../../../../../qunit/qunit-2.1.1.js')
    .importCss('../../../../../qunit/qunit-2.1.1.css').execute(function () {
        $JqcLoader.registerModule($JqcLoader.newModule('com.lifeonwalden.jqc', '../../../../../').registerComponent('baseElement'));

        $JqcLoader.importComponents('com.lifeonwalden.jqc', ['baseElement']);
        var fun = function () {
            QUnit.test("inherit", function (assert) {
                function InheritTest() {
                    if (arguments.length > 0) {
                        $.jqcBaseElement.apply(this, arguments);
                    }
                    this.extProps = null;
                    this.typeName = 'InheritTest';
                    this.elementId = 'helloworld';
                }
                InheritTest.prototype = new $.jqcBaseElement();
                InheritTest.prototype.constructor = InheritTest;
                InheritTest.prototype.updateCurrentVal = function (val) {
                    this.currentVal = val;
                    this.extProps = val + 1;

                    return this.extProps;
                };

                var instance = new InheritTest();
                var _extProps = instance.updateCurrentVal(1);

                assert.equal(_extProps, 2, 'Return Label');
                assert.equal(instance.getCurrentVal(), 1, 'Set value');
                assert.equal(instance.getJqcTypeName(), 'InheritTest', 'Set typeName');
                assert.equal(instance.getJqcElementId(), 'helloworld', 'Set elementId');
            });
        };
        $JqcLoader.execute(fun);
    });