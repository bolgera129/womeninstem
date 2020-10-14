import React from "react"
import { Calendar, Badge } from 'antd';
import { Card } from 'antd';
import {  Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Grid } from "@material-ui/core";
export default function Programming(){

  const { Meta } = Card;


    function getListData(value) {
        let listData;
        switch (value.date()) {
          case 14:
            listData = [
              { type: 'success', content: 'Fireside Chat' }
            ];
            break;
          case 20:
            listData = [
              { type: 'success', content: 'Strategic Networking Workshop' }
            ];
            break;
          case 28:
            listData = [
              { type: 'success', content: 'Mentorship Event' }
            ];
            break;
          default:
        }
        return listData || [];
      }

    function dateCellRender(value) {
        const listData = getListData(value);
        return (
          <ul className="events">
            {listData.map(item => (
              <li key={item.content}>
                <Badge status={item.type} text={item.content} />
              </li>
            ))}
          </ul>
        );
      }
      
      function getMonthData(value) {
        if (value.month() === 8) {
          return 1394;
        }
      }
      
      function monthCellRender(value) {
        const num = getMonthData(value);
        return num ? (
          <div className="notes-month">
            <section>{num}</section>
            <span>Backlog number</span>
          </div>
        ) : null;
      }

    return(
        <div className = "padding20">
          <div>
            <h1 className = "centerText">
              Featured Events
            </h1>
              <Grid container spacing = {8}>
                <Grid lg = {4} sm = {12} item>
                  <Card
                    cover={
                      <img
                        alt="example"
                        src="/WIS/Fireside_Chat_14th.png"
                      />
                    }
                  >
                    <Meta
                      title="Fireside Chat with Professor Taghian"
                      description="Wednesday October 14th, 7 PM"
                    />
                  </Card>
                </Grid>
                <Grid item lg = {4} sm = {12}>
                <Card
                    cover={
                      <img
                        alt="example"
                        src="/WIS/gartner.png"
                      />
                    }
                  >
                    <Meta
                      title="Strategic Networking Workshop"
                      description="Tuesday October 20th, 7 PM"
                    />
                  </Card>
                </Grid>
                <Grid lg = {4} item xs = {12} sm = {12}>
                <Card
                    cover={
                      <img
                        alt="example"
                        src="/WIS/MentorshipEvent28.png"
                      />
                    }
                  >
                    <Meta
                      title="Mentorship Event"
                      description="Wednesday October 28th, 7 PM"
                    />
                  </Card>
                </Grid>
              </Grid>
            </div>
            <h1>
              Schedule
            </h1>
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
        </div>
    )
}