import React,{Component} from 'react';


export default class Result extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
<article class="br2 ba dark-gray b--black-10 cover mv4 w-100 w-50-m w-25-l mw5 center hide-child">
  <section class="pv4 ph5 center absolute">
    <a class="f6 link dim ph3 pv2 mb2 dib white child bg-black" href="#">Adopt</a>
  </section>
    <img src="http://placekitten.com/g/600/300" class="db  bg-white w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
  <div class="pa2 bg-white ph3-ns pb3-ns">
    
    <div class="dt w-100 mt1">
      <div class="dtc">
        <h1 class="f5 f4-ns mv0">Cat</h1>
      </div>
      <div class="dtc tr">
        <h2 class="f5 mv0">$1,000</h2>
      </div>
    </div>
    <p class="f6 lh-copy measure mt2 mid-gray">
      If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
      and touch water with paw then recoil in horror.
    </p>
  </div>
</article>
        )
    }
}