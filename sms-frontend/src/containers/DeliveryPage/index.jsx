import React from 'react';
import { Label, Input, Button} from 'reactstrap';
import { connect } from 'react-redux';
// import { history } from 'store';

import { TIMESLOTS } from 'constants/timeslots';
import { selectDeliveryTimeslot } from 'actions/delivery';

// console.log(store.getState())

class DeliveryPage extends React.Component {
    state = {
      selectedTime: "",
    };

    handleSelectChange = (e) => {
        this.setState({selectedTime: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.selectDeliveryTimeslot(this.state.selectedTime);
        // console.log(store.getState());
    }


    render() {
        return (
            <div>
                <h3> Select your preferred delivery timing </h3> 
                <form onSubmit={this.handleSubmit}>
                    Delivery slots:
                    {TIMESLOTS.map(i => (
                    <Label check key={TIMESLOTS.indexOf(i)}> 
                        <Input type="radio" value={i}
                        checked={this.state.selectedTime===i}
                        onChange={this.handleSelectChange}/>
                        {" "} {i}
                    </Label>
                    ))}
                    <Button type="submit"> Submit </Button>
                </form>
            </div>
        )
    }
}
export default connect(null, {
    selectDeliveryTimeslot
})(DeliveryPage);