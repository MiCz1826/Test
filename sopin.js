function addEvent(element, event, delegate ) {
    if (typeof (window.event) != 'undefined' && element.attachEvent)
        element.attachEvent('on' + event, delegate);
    else 
        element.addEventListener(event, delegate, false);
}
