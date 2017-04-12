/**
 * @compiler Bridge.NET 16.0.0
 */
Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Operation", {
        Add: function (a, b) {
            return ((a + b) | 0);
        }
    });

    Bridge.define("o2", {
        Add: function (a, b) {
            return ((a + b) | 0);
        }
    });
});
