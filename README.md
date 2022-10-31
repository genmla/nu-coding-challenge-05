# nu-coding-challenge-05
Week 5 - Calendar
## Description

This project is a simple work day scheduler, dislaying the hours of 9 AM to 5 PM for the current day. It utilizes moment JS to display the current date and time, past, present, and future hours on the planner, and it allows the user to input events and saves them to local storage. The events reset each day and are disabled if the displayed hours are more than 8 hours earlier than the current time. A prompt confirms when the event is modified and saved by clicking the icon.

## Installation

N/A

## Usage

Users can input their own events in each hour block. The calendar is coded to display past hours, current hours, and future hours. The events can be modified by the user and saved by clicking the blue calendar icon. A prompt confirms when an event is saved. It stores events in the local storage but disables event modification 8 hours earlier than the current time. It clears stored events when the time resets. Getting this project to meet the user story required we utilized moment JS for the current time, I got the bootstrap icon library instead of the awesome fonts library for the icons. We tested our knowledge of JQuery, flexed our conditional statements, and practiced storing and clearing values to the local storage. My JS was much longer than the posted answer, but I was able to meet the USER requirements in the project README file. 

![GIF showing the user inputing events in the present time slot, clicking the icon to save the event, refreshing the page to demonstrate the event was saved. The user then enters a new event, saves it, refreshes, then modifies the recently entered event, saves it, and refreshes to demonstrate its storage and modification. ](/assets/Work%20Day%20Scheduler.gif)

URL: 

## Credits

N/A

## License

MIT License