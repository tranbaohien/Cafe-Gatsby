import React, { Component } from 'react'
import Title from '../Globals/Title';
import Img from 'gatsby-image'

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: props.items.edges,
            coffeeItems: props.items.edges
        }
    }
    render() {
        if(this.state.items.length>0) {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Best of our menu"/>
                        <div className="row">
                            {this.state.coffeeItems.map(({node}) => {
                                return(
                                    <div key={node.id} className="col-11 col-md-6 my-3">
                                        <div className="row">
                                            <div className="col-md-2 col-2 text-center">
                                                <Img fixed={node.image.fixed} />
                                            </div>
                                            <div className="content-block col-md-10 col-10">
                                                <div className="d-flex justify-content-between">
                                                    <h4 className="title">{node.title}</h4>
                                                    <h5 className="price text-yellow font-weight-bold">${node.price}</h5>
                                                </div>
                                                <div className="description-block">
                                                    <p className="description text-muted">
                                                        {node.description.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>                                        
                                    </div>  
                                )
                            })}
                            <div className="col-10 col-sm-6 mx-auto
                             text-center text-capitalize">
                                
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        else {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Best of our menu"/>
                        <div className="row">
                            <div className="col-10 col-sm-6 mx-auto
                             text-center text-capitalize">
                                 <h1>There are no items to display!</h1>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}
