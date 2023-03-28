import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import completeTick from '../assets/VectorcompleteTick.svg';
import tick from '../assets/Vectortick.svg';
import hourglass from '../assets/Vectorhourglass.svg';
// import  from '../assets/Vectortick.svg';

// import SvgIcon from '@mui/material/SvgIcon';

function Cardss() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://schema.postman.com/json/collection/v2.1.0/collection.json`).then((res) => {
        console.log(res);
        setMyData(res.data.result.data);
      });
  }, []);

  const counts = myData.reduce(
    (acc, form) => {
      if (form.status === "completed") {
        acc.typeACount++;
      } else if (form.status === "ongoing") {
        acc.typeBCount++;
      } else if (form.status === "draft") {
        acc.typeCCount++;
      }
      return acc;
    },
    { typeACount: 0, typeBCount: 0, typeCCount: 0 }
  );

  const Array = [
    {
      name: "card1",
      count: myData.length,
      title: "Total Surveys",
      logo: completeTick,
    },
    {
      name: "card2",
      count: counts.typeBCount,
      title: "Ongoing Surveys",
      logo: completeTick,
    },
    {
      name: "card3",
      count: counts.typeCCount,
      title: "Draft Surveys",
      logo: completeTick,
    },
    {
      name: "card4",
      count: counts.typeACount,
      title: "Completed Surveys",
      logo: completeTick,
    },
  ];
  console.log(myData);

  return (
    // <div class="col-sm-6">
    <div className="cardcontainer">
      <>
        <>
          <>
            <Card Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className = 'in'> {myData.length} </Card.Title>
                <img src= {tick} className="first" />
                
                {/* <FactCheckIcon className="first"> </FactCheckIcon> */}
                <Card.Subtitle className="mb-2 text-muted">
                  Total Surveys
                </Card.Subtitle>

                <Card.Text>
                  
                   </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
<Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>

            <Card Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className = 'in'>{counts.typeACount}
                </Card.Title>
                {/* <i class="fa fa-hourglass-half" aria-hidden="true"></i> */}
                {/* <completeTick className="rin"> */}
                <img src= {hourglass} className="rin" />
                
                {/* </completeTick> */}
                <Card.Subtitle className="mb-2 text-muted">
                  {" "}
                  Ongoing Surveys
                </Card.Subtitle>
                <Card.Text > 
              <button className='view'>View All </button>
            </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
<Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
          </>
          <Card Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className = 'in'>{counts.typeBCount}</Card.Title>
              <container className="bod">
                <CalendarMonthRoundedIcon className="first">
                  {" "}
                </CalendarMonthRoundedIcon>
              </container>
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                Draft Surveys
              </Card.Subtitle>
              <Card.Text > 
              <button className='view'>View All </button>
            </Card.Text>
              {/* <Card.Link href="#">Card Link</Card.Link>
<Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
          </Card>
        </>
        <Card Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className = 'in'>{counts.typeCCount}</Card.Title>
            {/* <CheckCircleOutlineRoundedIcon className="second">
              {" "}
            </CheckCircleOutlineRoundedIcon> */}
                    <img src= {completeTick} className="rin" />
            <br></br>
            <Card.Subtitle className="mb-2 text-muted">
              {" "}
              Completed Surveys
            </Card.Subtitle>
            <Card.Text > 
              <button className='view'>View All </button>
            </Card.Text>
           
            {/* <Card.Link href="#">Card Link</Card.Link>
  <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
      </>
    </div>
  );
}

export default Cardss;
