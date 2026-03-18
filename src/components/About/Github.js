import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter(activity => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay < currentMonth &&
        monthOfDay >= currentMonth - shownMonths
      );
    });
  };

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px", color: "#18181B" }}>
        Jours où je <strong style={{ color: "#2563EB" }}>Code</strong>
      </h1>
      <GitHubCalendar
        username="Bsh54"
        transformData={selectLastHalfYear}
        blockSize={15}
        blockMargin={5}
        color="#2563EB"
        fontSize={16}
        labels={{
          months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
          weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
          totalCount: '{{count}} contributions en {{year}}',
          legend: {
            less: 'Moins',
            more: 'Plus'
          }
        }}
        theme={{
          light: ['#F3F4F6', '#BFDBFE', '#60A5FA', '#2563EB', '#1D4ED8'],
          dark: ['#F3F4F6', '#BFDBFE', '#60A5FA', '#2563EB', '#1D4ED8']
        }}
      />
    </Row>
  );
}

export default Github;
