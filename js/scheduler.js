/*global $, scheduler*/
/*jslint plusplus: true */
var loadSchedule = function (employeeId, token) {
    "use strict";
    $.ajax("/wfo/rest/fs-api/schedule/get?employeeId=" + employeeId + "&startTime=2015-09-13T12:15:00Z&endTime=2021-09-13T12:15:00Z", {
        headers: {
            Impact360AuthToken: token
        },
        success: function (data) {
            var i;
            data.scheduleEvents.forEach(function (scheduleEvent, index) {
                var startDate = new Date(scheduleEvent.startTime),
                    endDate = new Date(scheduleEvent.endTime);
                startDate.setHours(startDate.getHours() - 8);
                endDate.setHours(endDate.getHours() - 8);
                scheduler.addEvent({
                    start_date: startDate,
                    end_date: endDate,
                    text: scheduleEvent.activityName,
                    type: scheduleEvent.activityName.toLowerCase()
                });
            });
        },
        contentType: "application/json",
        dataType: "json"
    });


};

var authenticate = function (username, password) {
    "use strict";
    var authenticationToken = null,
        data = {
            user: username,
            password: password
        };
    $.ajax("/wfo/rest/core-api/auth/token", {
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
    }).done(function (data) {
        loadSchedule("20081", data.AuthToken.token);
    });
};

$(document).ready(function () {
    "use strict";
    // scheduler.config.readonly = true;
    scheduler.config.drag_move = false;
    scheduler.config.drag_create = false;
    scheduler.config.dblclick_create = false;
    scheduler.config.readonly_form = true;
    scheduler.config.select = false;

    scheduler.config.details_on_dblclick = true;

    //scheduler.config.separate_short_events = true;
    scheduler.config.hour_size_px = 168;

    scheduler.config.active_link_view = "day";
    scheduler.config.first_hour = 6;
    scheduler.config.last_hour = 19;

    scheduler.templates.event_class = function (start, end, event) {
        return event.type;
    };

    $("#dhx_minical_icon").click(function () {
        if (scheduler.isCalendarVisible()) {
            scheduler.destroyCalendar();
        } else {
            scheduler.renderCalendar({
                position : "dhx_minical_icon",
                date : scheduler._date,
                navigation : true,
                handler : function (date, calendar) {
                    scheduler.setCurrentView(date);
                    scheduler.destroyCalendar();
                }
            });
        }
    });

    scheduler.init("scheduler", new Date(2020, 0, 1), "week");
    authenticate("cabbott", "cabbott");
});