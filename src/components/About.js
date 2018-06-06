import React from 'react';

const About = () =>{
    return (
        <div>
          <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuc4Eyi2DyU-H8S4iBN09mzH5GEdYZgXBR6CbE17xUgbi4jageFw" class="br-100 h3 w3 dib" alt="" title="Photo of a kitty staring at you" />
            <h1 className="f4">Mimi Whitehouse</h1>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <p className="lh-copy measure center f6 black-70">
            Quite affectionate and outgoing.
            She loves to get chin scratches and will
            roll around on the floor waiting for you give her more of them.
          </p>
          </article>
        </div>
    );
}

export default About;