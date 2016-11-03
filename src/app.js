(function(global) {
    "use strict;"

    function CloverBasic() {

        console.log('test');

    };

    // Exports
    if ("process" in global) {
        module["exports"] = CloverBasic;
    }
    global["CloverBasic"] = CloverBasic;

})((this || 0).self || global);