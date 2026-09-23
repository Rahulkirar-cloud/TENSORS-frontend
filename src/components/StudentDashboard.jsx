import React, { useState } from 'react';
import './StudentDashboard.css';

const schedule = [
  { time: '8:30 AM', title: 'Linear Algebra', sub: 'Prof. Rao · Room 214', status: 'done' },
  { time: '9:45 AM', title: 'Organic Chemistry Lab', sub: 'Prof. Mehta · Lab 3', status: 'done' },
  { time: '11:15 AM', title: 'World History Seminar', sub: 'Prof. Khan · Room 108', status: 'now' },
  { time: '1:00 PM', title: 'Lunch break', sub: '', status: 'upcoming' },
  { time: '2:00 PM', title: 'Computer Science', sub: 'Prof. Iyer · Lab 1 · project checkpoint due', status: 'upcoming' },
  { time: '4:00 PM', title: 'Debate club', sub: 'Auditorium', status: 'upcoming' },
];

const subjects = [
  { name: 'Computer Science', pct: 88 },
  { name: 'Operating Science', pct: 74 },
  { name: 'History', pct: 91 },
  { name: 'Computer Sci.', pct: 82 },
  { name: 'English', pct: 69 },
];

const initialNotifications = [
  { text: 'Chemistry lab report graded. You scored 18/20.', time: '20 min ago', read: false },
  { text: 'World History seminar has moved to Room 108 for today.', time: '1 hr ago', read: false },
  { text: 'Computer Science project checkpoint due at 2:00 PM.', time: '3 hr ago', read: false },
  { text: 'Debate club practice confirmed for 4:00 PM.', time: 'Yesterday', read: true },
  { text: 'Library books due for renewal this week.', time: 'Yesterday', read: true },
];

export default function StudentDashboard({ studentName = 'Aanya' }) {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markRead = (index) => {
    setNotifications((prev) =>
      prev.map((n, i) => (i === index ? { ...n, read: true } : n))
    );
  };

  const unreadCount = notifications.filter((n) => !n.read).length;
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="ed-dash-wrap">
      <div className="ed-dash">
        <header className="ed-header">
          <div className="ed-brand">
            edudmart<span>.ai</span>
          </div>
          <div className="ed-greeting">
            <h1>Good afternoon, {studentName}</h1>
            <p>{today}</p>
          </div>
        </header>

        <div className="ed-grid">
          <div className="ed-stack">
            <div className="ed-panel">
              <div className="ed-panel-head">
                <h2>Today's schedule</h2>
                <span className="ed-meta">{schedule.length} classes</span>
              </div>
              <div className="ed-timeline">
                {schedule.map((item, i) => (
                  <div
                    key={i}
                    className={`ed-tl-item ${item.status === 'now' ? 'now' : ''} ${
                      item.status === 'done' ? 'done' : ''
                    }`}
                  >
                    <div className="ed-tl-time">{item.time}</div>
                    <div className="ed-tl-rail">
                      <div className="ed-tl-dot" />
                      <div className="ed-tl-line" />
                    </div>
                    <div className="ed-tl-body">
                      <div className="ed-tl-title">{item.title}</div>
                      {item.sub && <div className="ed-tl-sub">{item.sub}</div>}
                      {item.status === 'now' && (
                        <span className="ed-tl-tag tag-live">In progress</span>
                      )}
                      {item.status === 'done' && (
                        <span className="ed-tl-tag tag-done">Completed</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="ed-stack">
            <div className="ed-panel">
              <div className="ed-panel-head">
                <h2>Academic progress</h2>
                <span className="ed-meta">This semester</span>
              </div>
              {subjects.map((s, i) => (
                <div className="ed-subject-row" key={i}>
                  <div className="ed-subject-name">{s.name}</div>
                  <div className="ed-bar-track">
                    <div className="ed-bar-fill" style={{ width: `${s.pct}%` }} />
                  </div>
                  <div className="ed-subject-pct">{s.pct}%</div>
                </div>
              ))}
              <div className="ed-progress-summary">
                <div>
                  <div className="ed-stat-num">8.4</div>
                  <div className="ed-stat-label">CGPA</div>
                </div>
                <div>
                  <div className="ed-stat-num">92%</div>
                  <div className="ed-stat-label">Attendance</div>
                </div>
                <div>
                  <div className="ed-stat-num">3</div>
                  <div className="ed-stat-label">Assignments due</div>
                </div>
              </div>
            </div>

            <div className="ed-panel">
              <div className="ed-panel-head">
                <h2>Notifications</h2>
                <span className="ed-meta">
                  {unreadCount ? `${unreadCount} unread` : 'All caught up'}
                </span>
              </div>
              {notifications.map((n, i) => (
                <div
                  key={i}
                  className={`ed-notif ${n.read ? 'read' : ''}`}
                  onClick={() => markRead(i)}
                >
                  <div className="ed-notif-dot" />
                  <div className="ed-notif-body">
                    <div className="ed-notif-text">{n.text}</div>
                    <div className="ed-notif-time">{n.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="ed-footer">Edudmart AI · dashboard</footer>
      </div>
    </div>
  );
}
