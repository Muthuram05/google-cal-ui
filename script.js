let nonConflictData = [
    {
      startTime: "00:00",
      endTime: "01:30",
      color: "#f6be23",
      title: "Common Standup",
    },
    {
      startTime: "04:30",
      endTime: "7:30",
      color: "#f6501e",
      title: "Lead Syncup",
    },
    {
      startTime: "12:00",
      endTime: "13:30",
      color: "#029be5",
      title: "Filepicker Spec Kickoff",
    },
    {
      startTime: "09:00",
      endTime: "10:00",
      color: "#029be5",
      title: "Filepreview TDD",
    },
    {
      startTime: "16:00",
      endTime: "19:00",
      color: "#029be5",
      title: "Team Lunch",
    },
    {
      startTime: "20:30",
      endTime: "22:30",
      color: "#029be5",
      title: "Chapter meeting",
    },
  ]


let conflictData = [
    {
      startTime: "00:00",
      endTime: "01:30",
      color: "#f6be23",
      title: "Common Standup",
    },
    {
      startTime: "03:30",
      endTime: "7:30",
      color: "#f6501e",
      title: "Lead Syncup",
    },
    {
      startTime: "04:30",
      endTime: "8:30",
      color: "#f6501e",
      title: "Filepicker Spec Kickoff",
    },
    {
      startTime: "06:30",
      endTime: "9:00",
      color: "#f6501e",
      title: "Demo",
    },
    {
      startTime: "11:00",
      endTime: "13:30",
      color: "#029be5",
      title: "Filepreview TDD",
    },
    {
      startTime: "12:00",
      endTime: "13:30",
      color: "#029be5",
      title: "Chapter Meeting",
    },
    {
      startTime: "09:30",
      endTime: "10:30",
      color: "#029be5",
      title: "1:1 Meeting with Adhi",
    },
    {
      startTime: "16:00",
      endTime: "17:00",
      color: "#029be5",
      title: "Peer Code review",
    },
    {
      startTime: "15:00",
      endTime: "17:00",
      color: "#029be5",
      title: "Interview",
    },
    {
      startTime: "18:00",
      endTime: "19:00",
      color: "#f6501e",
      title: "Opensource Contribution",
    },
    {
      startTime: "20:30",
      endTime: "22:30",
      color: "#029be5",
      title: "Retrospective",
    },
    {
      startTime: "20:30",
      endTime: "22:30",
      color: "#029be5",
      title: "Feedback form fillup",
    },
  ]

function _tConvert(time) {
  time = time.match(/^([01]\d|2[0-3]):([0-5]\d)$/) || [time];
  if (time.length > 1) {
    time = time.slice(1);
    time.push(+time[0] < 12 ? "AM" : "PM");
    time[0] = +time[0] % 12 || 12;
  }
  return time.join("");
}

function _generateTime() {
  let times = [];
  for (let tt = 0; tt < 24 * 60; tt += 60) {
    let hh = Math.floor(tt / 60);
    let mm = tt % 60;
    times.push(
      ("0" + (hh % 12 || 12)).slice(-2) +
        ":" +
        ("0" + mm).slice(-2) +
        (hh < 12 ? "AM" : "PM")
    );
  }
  return times;
}

let start1 = 0;
let end1 = 0;
function createEventElement(event) {
  const eventEl = document.createElement("div");
  eventEl.classList.add("event");
  eventEl.style.backgroundColor = event.color;
  eventEl.innerText = event.title;

  const start = event.startTime.split(":");
  const end = event.endTime.split(":");

  const startMinutes = parseInt(start[0]) * 60 + parseInt(start[1]);
  const endMinutes = parseInt(end[0]) * 60 + parseInt(end[1]);
  const check = startMinutes <= start1;
  const check2 = endMinutes <= end1;
  start1 = startMinutes;
  end1 = endMinutes;
  const duration = endMinutes - startMinutes;

  eventEl.style.top = startMinutes + "px";
  eventEl.style.height = duration + "px";
  eventEl.style.left = "60px";
  eventEl.style.right = "10px";

  return eventEl;
}

function createEventElement2(event) {
    const eventEl = document.createElement("div");
    eventEl.classList.add("event");
    eventEl.style.backgroundColor = event.color;
    eventEl.innerText = event.title;
  
    const start = event.startTime.split(":");
    const end = event.endTime.split(":");
  
    const startMinutes = parseInt(start[0]) * 60 + parseInt(start[1]);
    const endMinutes = parseInt(end[0]) * 60 + parseInt(end[1]);
    const duration = endMinutes - startMinutes;
  
    eventEl.style.top = startMinutes + "px";
    eventEl.style.height = duration + "px";
    eventEl.style.left = "300px";
    eventEl.style.right = "10px";
  
    return eventEl;
  }
const calendar = _generateTime();
const calendarContainer = document.getElementById("calendar");

calendar.forEach((time) => {
  const timeContainer = document.createElement("div");
  timeContainer.classList.add("timeContainer");
  timeContainer.classList.add(time);
  const p = document.createElement("p");
  p.textContent = time;
  timeContainer.appendChild(p);
  calendarContainer.appendChild(timeContainer);
});

const dataa = [...nonConflictData,...conflictData]

nonConflictData.forEach((event) => {
  const eventEl = createEventElement(event);
  calendarContainer.appendChild(eventEl);
});

conflictData.forEach((event) => {
  const eventEl = createEventElement2(event);
  calendarContainer.appendChild(eventEl);
});
