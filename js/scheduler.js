/*global $, scheduler*/
/*jslint plusplus: true */
var loadSchedule = function (employeeId, token) {
    "use strict";
//    $.ajax("http://localhost:7001/wfo/rest/fs-api/schedule/get?employeeId=" + employeeId + "&startTime=2015-09-13T12:15:00Z&endTime=2021-09-13T12:15:00Z", {
//        headers: {
//            Impact360AuthToken: token
//        },
//        beforeSend: function (jqXHR, settings) {
//            jqXHR.setRequestHeader("Impact360AuthToken", token);
//        },
//        done: function (data) {
//        },
//        contentType: "application/json",
//        dataType: "jsonp"
//    });
    var jsonResponse = {
        "scheduleEvents": [
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-06T17:00:00Z",
                "endTime": "2020-01-06T18:15:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4104,
                "activityName": "Break",
                "startTime": "2020-01-06T18:15:00Z",
                "endTime": "2020-01-06T18:30:00Z",
                "colorCode": "FF8080",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-06T18:30:00Z",
                "endTime": "2020-01-06T20:30:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4107,
                "activityName": "Lunch",
                "startTime": "2020-01-06T20:30:00Z",
                "endTime": "2020-01-06T21:00:00Z",
                "colorCode": "A0E0E0",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-06T21:00:00Z",
                "endTime": "2020-01-06T23:00:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4104,
                "activityName": "Break",
                "startTime": "2020-01-06T23:00:00Z",
                "endTime": "2020-01-06T23:15:00Z",
                "colorCode": "FF8080",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-06T23:15:00Z",
                "endTime": "2020-01-07T01:30:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-07T18:30:00Z",
                "endTime": "2020-01-07T19:45:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4104,
                "activityName": "Break",
                "startTime": "2020-01-07T19:45:00Z",
                "endTime": "2020-01-07T20:00:00Z",
                "colorCode": "FF8080",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-07T20:00:00Z",
                "endTime": "2020-01-07T22:00:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4107,
                "activityName": "Lunch",
                "startTime": "2020-01-07T22:00:00Z",
                "endTime": "2020-01-07T22:30:00Z",
                "colorCode": "A0E0E0",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-07T22:30:00Z",
                "endTime": "2020-01-08T01:15:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4104,
                "activityName": "Break",
                "startTime": "2020-01-08T01:15:00Z",
                "endTime": "2020-01-08T01:30:00Z",
                "colorCode": "FF8080",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-08T01:30:00Z",
                "endTime": "2020-01-08T03:00:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4165,
                "activityName": "Coaching",
                "startTime": "2020-01-08T18:30:00Z",
                "endTime": "2020-01-08T19:00:00Z",
                "colorCode": "FF7F50",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-08T19:00:00Z",
                "endTime": "2020-01-08T20:15:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4104,
                "activityName": "Break",
                "startTime": "2020-01-08T20:15:00Z",
                "endTime": "2020-01-08T20:30:00Z",
                "colorCode": "FF8080",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-08T20:30:00Z",
                "endTime": "2020-01-08T22:00:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4107,
                "activityName": "Lunch",
                "startTime": "2020-01-08T22:00:00Z",
                "endTime": "2020-01-08T22:30:00Z",
                "colorCode": "A0E0E0",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-08T22:30:00Z",
                "endTime": "2020-01-09T01:15:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4104,
                "activityName": "Break",
                "startTime": "2020-01-09T01:15:00Z",
                "endTime": "2020-01-09T01:30:00Z",
                "colorCode": "FF8080",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-09T01:30:00Z",
                "endTime": "2020-01-09T03:00:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-09T18:30:00Z",
                "endTime": "2020-01-09T20:15:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4104,
                "activityName": "Break",
                "startTime": "2020-01-09T20:15:00Z",
                "endTime": "2020-01-09T20:30:00Z",
                "colorCode": "FF8080",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-09T20:30:00Z",
                "endTime": "2020-01-09T21:30:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4107,
                "activityName": "Lunch",
                "startTime": "2020-01-09T21:30:00Z",
                "endTime": "2020-01-09T22:00:00Z",
                "colorCode": "A0E0E0",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-09T22:00:00Z",
                "endTime": "2020-01-10T01:15:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4104,
                "activityName": "Break",
                "startTime": "2020-01-10T01:15:00Z",
                "endTime": "2020-01-10T01:30:00Z",
                "colorCode": "FF8080",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-10T01:30:00Z",
                "endTime": "2020-01-10T03:00:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-10T18:30:00Z",
                "endTime": "2020-01-10T19:30:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4104,
                "activityName": "Break",
                "startTime": "2020-01-10T19:30:00Z",
                "endTime": "2020-01-10T19:45:00Z",
                "colorCode": "FF8080",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-10T19:45:00Z",
                "endTime": "2020-01-10T22:00:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4107,
                "activityName": "Lunch",
                "startTime": "2020-01-10T22:00:00Z",
                "endTime": "2020-01-10T22:30:00Z",
                "colorCode": "A0E0E0",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-10T22:30:00Z",
                "endTime": "2020-01-11T01:30:00Z",
                "colorCode": "0000FF",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4104,
                "activityName": "Break",
                "startTime": "2020-01-11T01:30:00Z",
                "endTime": "2020-01-11T01:45:00Z",
                "colorCode": "FF8080",
                "comments": ""
            },
            {
                "id": null,
                "employeeId": 20081,
                "activityId": -4101,
                "activityName": "Immediate",
                "startTime": "2020-01-11T01:45:00Z",
                "endTime": "2020-01-11T03:00:00Z",
                "colorCode": "0000FF",
                "comments": ""
            }
        ]
    },
        i;
    jsonResponse.scheduleEvents.forEach(function (scheduleEvent, index) {
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
};

var authenticate = function (username, password) {
    "use strict";
    var authenticationToken = null,
        data = {
            user: username,
            password: password
        };
    $.post({
        url: "http://localhost:7001/wfo/rest/core-api/auth/token",
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