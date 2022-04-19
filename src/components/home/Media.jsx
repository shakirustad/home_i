import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Microlink from '@microlink/react'
import {
    mediaHeading
} from "../../editable-stuff/configurations.json";

const LinkPreview = styled(Microlink)`
  max-width:90%;
  border-radius: 0.4;
  width: 21rem;

`
 
class Media extends React.Component {
  render() {
    const layout = [
    ];
    return (
        <div id="media" className="jumbotron jumbotron-fluid m-0">
            <div className="container container-fluid p-0">
                <h1 className="display-4 pb-5 mb-4 mr-5 pr-0 text-center">{mediaHeading}</h1>
                    <div className="container container-fluid p-0">
                        <center>
                            <div class ="Media" pl-5>
                                <div class="Table">
                                    <div class="Row no-gutters">
                                        <div class="Cell">
                                            <p>
                                                <LinkPreview url='https://news.uga.edu/traveling-mars-complicated-teamwork/' size='large' />
                                            </p>
                                        </div>
                                        <div class="Cell">
                                            <p>
                                                <LinkPreview url='https://www.facebook.com/universityofga/posts/10156156339741682' size='large' />
                                            </p>
                                        </div>
                                        <div class="Cell">
                                            <p>
                                                <LinkPreview url='https://www.facebook.com/pinecrestacademy/posts/3015833058447949' size='large' />
                                            </p>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </center>
                    </div>
            </div>
        </div>
    )
  }
}

export default Media;

