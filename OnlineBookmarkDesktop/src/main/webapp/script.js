window.onload = function () {
    var home       = document.getElementById("home");
    var settings   = document.getElementById("settings");
    var folder    = document.getElementById("folder");
    var bookmark       = document.getElementById("bookmark");
    var logout     = document.getElementById("logout");
    var clock      = document.getElementById("clock");
    
    home.onclick = function () {
        var settingsWindow  = document.getElementById("settingsWindow");
        var foldersWindow   = document.getElementById("foldersWindow");
        var bookmarksWindow = document.getElementById("bookmarksWindow");
        var logoutWindow    = document.getElementById("logoutWindow");
        var clockWindow     = document.getElementById("clockWindow"); 
        settingsWindow.style.visibility = "hidden";
        foldersWindow.style.visibility = "hidden";
        bookmarksWindow.style.visibility = "hidden";
        logoutWindow.style.visibility = "hidden";
        clockWindow.style.visibility = "hidden";
        
        var settings_li = document.getElementById("settings_li");
        var folder_1i = document.getElementById("folder_1i");
        var bookmark_li = document.getElementById("bookmark_li");
        var clock_li = document.getElementById("clock_li");
        var logout_li = document.getElementById("logout_li");
        settings_li.style.backgroundColor = "black";
        folder_1i.style.backgroundColor = "black";
        bookmark_li.style.backgroundColor = "black";
        clock_li.style.backgroundColor = "black";
        logout_li.style.backgroundColor = "black";
        
        return false;
    }
    settings.onclick = function () {
        var settingsWindow = document.getElementById("settingsWindow");
        var settings_li = document.getElementById("settings_li");
        var status = window.getComputedStyle(settingsWindow, null).getPropertyValue('visibility');
        if(status == "visible"){
            settingsWindow.style.visibility = "hidden";
            settings_li.style.backgroundColor = "black";
        }
        if(status == "hidden"){
            settingsWindow.style.visibility = "visible";
            settings_li.style.backgroundColor = "red";
        }
        //If you don't want the link to actually 
        // redirect the browser to another page,
        // "google.com" in our example here, then
        // return false at the end of this block.
        // Note that this also prevents event bubbling,
        // which is probably what we want here, but won't 
        // always be the case.
        return false;
    }
    folder.onclick = function () {
        var foldersWindow = document.getElementById("foldersWindow");
        var folder_1i = document.getElementById("folder_1i");
        var status = window.getComputedStyle(foldersWindow, null).getPropertyValue('visibility');
        if (status == "visible") {
            foldersWindow.style.visibility = "hidden";
            folder_1i.style.backgroundColor = "black";
        }
        if (status == "hidden") {
            foldersWindow.style.visibility = "visible";
            folder_1i.style.backgroundColor = "red";
        }
        return false;
    }
    bookmark.onclick = function () {
        var bookmarksWindow = document.getElementById("bookmarksWindow");
        var bookmark_li = document.getElementById("bookmark_li");
        var status = window.getComputedStyle(bookmarksWindow, null).getPropertyValue('visibility');
        if(status == "visible"){
            bookmarksWindow.style.visibility = "hidden";
            bookmark_li.style.backgroundColor = "black";
        }
        if (status == "hidden") {
            bookmarksWindow.style.visibility = "visible";
            bookmark_li.style.backgroundColor = "red";
        }
        return false;
    }
    clock.onclick = function () {
        var clockWindow = document.getElementById("clockWindow");
        var clock_li = document.getElementById("clock_li");
        var status = window.getComputedStyle(clockWindow, null).getPropertyValue('visibility');
        if (status == "visible") {
            clockWindow.style.visibility = "hidden";
            clock_li.style.backgroundColor = "black";
        }
        if (status == "hidden") {
            clockWindow.style.visibility = "visible";
            clock_li.style.backgroundColor = "red";
        }
        return false;
    }
    logout.onclick = function () {
        var logoutWindow = document.getElementById("logoutWindow");
        var logout_li = document.getElementById("logout_li");
        var status = window.getComputedStyle(logoutWindow, null).getPropertyValue('visibility');
        if (status == "visible") {
            logoutWindow.style.visibility = "hidden";
            logout_li.style.backgroundColor = "black";
        }
        if (status == "hidden") {
            logoutWindow.style.visibility = "visible";
            logout_li.style.backgroundColor = "red";
        }
        return false;
    }
}


function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
    event.dataTransfer.setData("Text", str);
}

function drop(event){
    var offset = event.dataTransfer.getData("Text").split(',');
    var dm = document.getElementById(offset[2]);
    dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    event.preventDefault();
    return false;
}

function drag_over(event){
    event.preventDefault();
    return false;
}

