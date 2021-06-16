import React, { Component } from "react";
import OrderWidget from "../components/orderwidget";
import TwitterFeed from "../components/twitterfeed";
import MenuItem from "../components/menuitem";

class Extras extends Component {
    constructor() {
        super();
        this.state = {
          category: 3,
          items: [],
        };
      }
    
      componentDidMount() {
        fetch(`/api/menuitems/${this.state.category}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            this.setState({
              items: data,
            });
          });
      }
    
      render() {
        const { onAdd } = this.props;
        return (
          <React.Fragment>
            <div className="offset-1 col-12 col-md-6 col-lg-6 p-3">
              {this.state.items.map((item, index) => (
                <MenuItem item={item} key={index} onAdd={onAdd} />
              ))}
            </div>
            <div className="col-12 col-md-6 col-lg-3 p-3">
              <div className="row">
                <OrderWidget />
              </div>
              <div className="row mt-3">
                <TwitterFeed />
              </div>
            </div>
          </React.Fragment>
        );
      }
    }
 
export default Extras;