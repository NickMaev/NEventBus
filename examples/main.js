function init() {
    NEventBus.NEventBus.subscribe("event1",
        this,
        function(arg) {
            alert(arg);
        });
}