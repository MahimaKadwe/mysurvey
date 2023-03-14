import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
// import SvgIcon from '@mui/material/SvgIcon';



function Cardss() {
 
  return (
    // <div class="col-sm-6">
    <><><><Card Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>21 </Card.Title>

      <FactCheckIcon className="first"> </FactCheckIcon>
      
        <Card.Subtitle className="mb-2 text-muted"> Total Surveys</Card.Subtitle>

        <Card.Text>
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
<Card.Link href="#">Another Link</Card.Link> */}
     </Card.Body>
    </Card>

      <Card Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>3</Card.Title>
          {/* <i class="fa fa-hourglass-half" aria-hidden="true"></i> */}


          <Card.Subtitle className="mb-2 text-muted"> Ongoing Surveys</Card.Subtitle>
          <Card.Text>
          </Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
<Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card></><Card Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>8</Card.Title>
          <CalendarMonthRoundedIcon className="first" > </CalendarMonthRoundedIcon>
          <Card.Subtitle className="mb-2 text-muted"> Draft Surveys</Card.Subtitle>
          <Card.Text>
          </Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
<Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
      
      </>
      
      <Card Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>10</Card.Title>
          <CheckCircleOutlineRoundedIcon className='second'>  </CheckCircleOutlineRoundedIcon>
          <Card.Subtitle className="mb-2 text-muted"> Completed Surveys</Card.Subtitle>
          <Card.Text>
          </Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
  <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card></>
      // </div>
  );
}

export default Cardss;




