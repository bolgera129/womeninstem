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
          case 4:
            listData = [
              { type: 'success', content: 'Fireside Chat' }
            ];
            break;
          case 11:
            listData = [
              { type: 'success', content: 'Fireside Chat' }
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
              <Grid container>
                <Grid item container lg = {2}></Grid>
                <Grid item container lg = {8} spacing = {2}>
                  <Grid item lg = {4} sm = {12} item>
                    <Card
                      cover={
                        <img
                          alt="example"
                          src="internship.png"
                        />
                      }
                    >
                      <Meta
                        title="Internship Panel"
                        description="Thursday, March 4th at 7pm"
                      />
                    </Card>
                  </Grid>
                  <Grid item lg = {4} sm = {12}>
                  <Card
                      cover={
                        <img
                          alt="example"
                          src="karen.png"
                        />
                      }
                    >
                      <Meta
                        title="Fireside Chat with Karen Jarvis (Race and WIS)"
                        description="Wednesday, March 10th at 7 pm"
                      />
                    </Card>
                  </Grid>
                  <Grid lg = {4} item xs = {12} sm = {12}>
                  <Card
                      cover={
                        <img
                          alt="Professor Flebus"
                          src="Flebus.png"
                        />
                      }
                    >
                      <Meta
                        title="Fireside Chat with Professor Flebus"
                        description="Tuesday, March 16th at 7 pm"
                      />
                    </Card>
                  </Grid>
                </Grid>
                <Grid container lg = {8}>
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