import React, {useState, useEffect} from "react"
import {List, Skeleton, Select} from "antd"
import { Grid } from "@material-ui/core";

export default function Tutoring(){

    const data = [
      {
        name: 'Claire Hines',
        subjects:["Earth and Environmental Science", "Calculus",'Linear Algebra', 'Differential Equations']
      },
      {
        name: 'Julia Pollard',
        subjects:["Calculus", "Molecules and Cells",'Cell Bio','Gen Chem']
      },
      {
        name: 'Caitlin Wolfstaetter',
        subjects:["Linear Algebra", "Calculus"]
      },
    ];

    const [params, setParams] = useState([])
    const [people, setPeople] = useState(data)


    function handleChange(item){
      if (params.includes(item)){
          setParams(params.filter(p => p === item))
      }
      else{
        setParams(params.concat(item))
      }
    }

    useEffect(() => {
      if (params.length === 0) {
        setPeople(data)
      }
      else{
        setPeople(data.filter(person => {
          for (let subject of person.subjects){
            if (params.includes(subject)){
              return true
            }
          }
          return false
      }))
    }
    },[params])
        




    const { Option } = Select;
    const subjects = ["Calculus","Earth and Environmental Science", "Cell Bio", "Linear Algebra", 'Gen Chem','Differential Equations','Molecules and Cells']


    return(
        <Grid justify = "center" style ={{margin:"0" ,padding: "100px"}}>
          <h1 style = {{paddingBottom: '25px', fontSize:'25px'}}>
            Tutoring
          </h1>
            <Select mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']} placeholder= "Filter">
                {subjects.map(s => <Option key = {s}>{s}</Option>)}
            </Select>
            <List
                itemLayout="horizontal"
                dataSource={people}
                style = {{width : "80%", margin : 0, padding : 0, height: "100px", justifyContent: "center" , marginLeft: "125px"}}
                renderItem={item => (
                <List.Item style = {{margin : 0, padding : 0, height: "100px"}}>
                    <List.Item.Meta
                        title={<a href="https://ant.design">{item.name}</a>}
                        style= {{textAlign: "left", padding: "30px"}}
                    />
                    <List.Item>
                        <Skeleton avatar title={false} loading={item.loading} active>
                        <span >{item.subjects.map(i => <span className = {`tag ${i}`}>{i}</span>)}</span>
                        </Skeleton>
                    </List.Item>
                </List.Item>
                )}
            />
          <h1 style = {{paddingBottom: '25px', fontSize:'25px', marginTop: '250px'}}>
            Resources
          </h1>
          <Grid container style  = {{width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
            <Grid item lg = {4} sm = {12}>
              <h3>
                <a href = 'https://tutorial.math.lamar.edu/'>
                  Paul's Math Notes
                </a>
                <p>
                Great resource for free online notes and tutorials explaining concepts in Algebra, Calculus, and Differential Equations.
                </p>
              </h3>
            </Grid>
            <Grid item lg = {4} sm = {12}>
              <h3>
                <a href = 'https://www.albert.io'>
                Albert Organic Chemistry
                </a>
                <p>
                Great for fast practice questions of varying levels. A little pricey but it helped me confirm what I knew and explained things I misunderstood in a new way. 
                </p>
              </h3>
            </Grid>
            <Grid item lg = {4} sm = {12}>
              <h3>
                <a href = 'https://www.bc.edu/libraries/help/tutoring/tutoringinfo.html'>
                BC Library
                </a>
                <p>
                  Get 1 on 1 tutoring from BC designated tutors
                </p>
              </h3>   
            </Grid>
          </Grid>
        </Grid>
    )
}