$(document).ready(function() {
    // scheduler.config.readonly = true;
    scheduler.config.drag_move = false;
    scheduler.config.drag_create = false;
    scheduler.config.dblclick_create = false;
    scheduler.config.readonly_form = true;
    scheduler.config.select = false;

    scheduler.config.details_on_dblclick = true;

    scheduler.config.active_link_view = "day";
    scheduler.config.first_hour = 8;
    scheduler.config.last_hour = 20;

    scheduler.templates.event_class = function(start, end, event) {
        return event.type;
    };

    $('#dhx_minical_icon').click(function() {
        if (scheduler.isCalendarVisible()) {
            scheduler.destroyCalendar();
        } else {
            scheduler.renderCalendar({
                position : "dhx_minical_icon",
                date : scheduler._date,
                navigation : true,
                handler : function(date, calendar) {
                    scheduler.setCurrentView(date);
                    scheduler.destroyCalendar()
                }
            });
        }
    });

    scheduler.init('scheduler', new Date(), "week");
    scheduler.addEvent({
        start_date : "17-06-2017 09:00",
        end_date : "17-06-2017 17:00",
        text : "Immediate",
        type : "immediate"
    });
    scheduler.addEvent({
        start_date : "17-06-2017 10:15",
        end_date : "17-06-2017 10:30",
        text : "Morning break",
        type : "break"
    });
    scheduler.addEvent({
        start_date : "17-06-2017 12:30",
        end_date : "17-06-2017 13:00",
        text : "Lunch",
        type : "lunch"
    });
    scheduler.addEvent({
        start_date : "17-06-2017 15:00",
        end_date : "17-06-2017 15:15",
        text : "Afternoon break",
        type : "break"
    });
});