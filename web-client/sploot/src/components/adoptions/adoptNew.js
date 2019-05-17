import React, {
    Component
} from 'react';

import Uploader from '../../file/uploader';
import Sticky from 'react-sticky-el';
import Animal from './adoption';

export default class NewAdoption extends  Component{
    constructor(props){
        super(props);
        this.state={
            step: 0,
            pictures:[],
            picurl:[],
            vac:0
        }
        this.addImage = this.addImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.animal = new Animal()
    }

    componentDidMount(){
        this.handleStep(null,0)
        this.$ = window.$;
        
    }
    addImage(image,url) {
        this.setState((state) => ({
            pictures: state.pictures.concat(image),
            picurl:state.picurl.concat(url)
        }));

    }

    listfiles() {
        return this.state.picurl.map(picture => {
            return ( <
                img className = "thumbnail"
                src = {
                    picture
                }
                width = "120px" / >

            )

        })
    }

    handleStep(e, dir) {
        var step = this.state.step + dir;
        const tabs = ['#tab0','#tab1','#tab2','#tab3'];
        // alert(tabs[step])
        window.scroll(0,0)
        window.$(tabs[step]).tab('show');
        window.$(tabs[step]).parent().addClass('completed');
        window.$(tabs[step+1]).parent().removeClass('completed');
        window.$(tabs[step-1]).parent().removeClass('completed');

        if (this.state.step >= 0 && dir === 1 && this.state.step < 3) {
            this.setState(
                (state) => ({
                    step: state.step + dir
                })
            )
            // alert(dir)
        } else if (this.state.step <= 3 && this.state.step > 0 && dir === -1) {
            this.setState(
                (state) => ({
                    step: state.step + dir
                })
            )
        }

       
    }
    
    addVaccine(e){
        e.preventDefault()
        this.setState((state)=>({vac:state.vac+1}),function(){

            var body = document.getElementById("vaccineTable");
            var row = document.createElement("tr")
            var col1 = document.createElement("td")
            var col2 = document.createElement("td")
            var col3 = document.createElement("td")
            var col4 = document.createElement("td")
            
            var date = document.getElementById("date").cloneNode(true);
            date.name = "vaccine["+this.state.vac+"][date]"
            var pathology = document.getElementById("pathology").cloneNode(true);
            pathology.name = "vaccine["+this.state.vac+"][pathology]"
            var vaccine = document.getElementById("vaccine").cloneNode(true);
            vaccine.name = "vaccine["+this.state.vac+"][vaccine]"
            var serial = document.getElementById("serial").cloneNode(true);
            serial.name = "vaccine["+this.state.vac+"][serial]"
            
            date.value=null
            pathology.value=null
            vaccine.value=null
            serial.value=null

            col1.appendChild(date)
            col2.appendChild(pathology)
            col3.appendChild(vaccine)
            col4.appendChild(serial)
      
    
            row.appendChild(col1)
            row.appendChild(col2)
            row.appendChild(col3)
            row.appendChild(col4)

            // entry.innerHTML="Gekki"
            body.appendChild(row)
        })

    }


    handleSubmit(e){
        e.preventDefault();
        const payload = new FormData(e.target);
       
        payload.append('stamp',Date.now());
        this.state.pictures.map((pic,index) => (
            payload.append('picture',pic)
        ))

        this.animal.newAnimal(payload,this.redirect.bind(this));

            
    }
    redirect(){
        this.props.history.push('/adoptions');
    }
    render(){
        const basic =  <div  class="panel scale-up-center adoption-form panel-default">
        <div class="panel-heading">
        <div className="row">
            <div className="col-md-8 col-sm-12">
            <a href="../../api/adpotions/new">ddddd</a>
                Help me find a forever home!! 
            </div>
            <div className ="col-md-4 col-sm-12">
                <small>
                    Read the Sploot Animal Adoption Policy
                </small>
            </div>
        </div>
        </div>
        <div class="panel-body">
                 <fieldset>
        {/* <!-- Form Name --> */}
        {/* <legend>
            <h3>Sploot Animal Adoption Application</h3>
            <small>
                <a href="#">Read More About Our Adoption Policy Here</a>
                </small>
            </legend> */}

        {/* <!-- Text input--> */}
        <div class="form-group">
        <label class="col-md-4 control-label" for="name">Name of the Animal</label>  
        <div class="col-md-5">
        <input id="name" name="name" type="text" placeholder="Eg: March" class="form-control input-md" />
        <span class="help-block">This is an optional field.</span>  
        </div>
        </div>

        {/* <!-- Appended Input--> */}
        <div class="form-group">
        <label class="col-md-4 control-label" for="age">Estimated Age</label>
        <div class="col-md-4">
            <div class="input-group">
            <input id="age" name="age" class="form-control" placeholder="5-6" type="text"/>
            <span class="input-group-addon">Years</span>
            </div>
            
        </div>
        </div>
        {/* <!-- Select Basic --> */}
        <div class="form-group">
        <label class="col-md-4 control-label" for="species">Species</label>
        <div class="col-md-5">
            <select id="species" name="species" class="form-control">
            <option value="1">Dog</option>
            <option value="2">Cat</option>
            </select>
        </div>
        </div>

        {/* <!-- Text input--> */}
        <div class="form-group">
        <label class="col-md-4 control-label" for="breed">Breed</label>  
        <div class="col-md-5">
        <input id="breed" name="breed" type="text" placeholder="Eg: Dachshund" class="form-control input-md"/>
        <span class="help-block">Eventhough this is an Optional Field, it is highly recommended to specify the breed of Dogs</span>  
        </div>
        </div>

        {/* <!-- Multiple Radios --> */}
        <div class="form-group">
        <label class="col-md-4 control-label" for="sex">Sex</label>
        <div class="col-md-4">
        <div class="radio">
            <label for="sex-0">
            <input type="radio" name="sex" id="sex-0" value="1" checked="checked"/>
            Male
            </label>
            </div>
        <div class="radio">
            <label for="sex-1">
            <input type="radio" name="sex" id="sex-1" value="2"/>
            Female
            </label>
            </div>
        </div>
        </div>

        {/* <!-- Multiple Checkboxes --> */}
        <div class="form-group">
        <label class="col-md-4 control-label" for="specialneeds">Special Needs</label>
        <div class="col-md-4">
        <div class="checkbox">
            <label for="specialneeds-0">
            <input type="checkbox" name="specialneeds" id="specialneeds-0" value="amputee"/>
            Amputee
            </label>
            </div>
        <div class="checkbox">
            <label for="specialneeds-1">
            <input type="checkbox" name="specialneeds" id="specialneeds-1" value="sensory"/>
            Sensory Issues (eg: Blindness)
            </label>
            </div>
        <div class="checkbox">
            <label for="specialneeds-2">
            <input type="checkbox" name="specialneeds" id="specialneeds-2" value="mobility"/>
            Mobility Issues (eg: Paralysis)
            </label>
            </div>
        <div class="checkbox">
            <label for="specialneeds-3">
            <input type="checkbox" name="specialneeds" id="specialneeds-3" value="pts"/>
            Post-Traumatic Stress Disorder
            </label>
            </div>
        </div>
        </div>

        {/* <!-- Text input--> */}
        <div class="form-group">
        <label class="col-md-4 control-label" for="chronic">Chronic Illnesses</label>  
        <div class="col-md-8">
        <input id="chronic" name="chronic" type="text" placeholder="Eg: Diabetes, Epilepsy" class="form-control input-md"/>
        <span class="help-block">Illnesses that cannot be cured yet are not terminal such as Diabetes. Seperate with commas.</span>  
        </div>
        </div>

        {/* <!-- Text input--> */}
        <div class="form-group">
        <label class="col-md-4 control-label" for="terminal">Terminal Illnesses</label>  
        <div class="col-md-8">
        <input id="terminal" name="terminal" type="text" placeholder="Eg: Cancer, Kidney Failure" class="form-control input-md"/>
        <span class="help-block">Illnesses that cannot be adequately treated and are reasonably expected to result in death. Seperate with commas</span>  
        </div>
        </div>

        {/* <!-- Textarea --> */}
        <div class="form-group">
        <label class="col-md-4 control-label" for="additional">Misc.</label>
        <div class="col-md-4">                     
            <textarea class="form-control" id="additional" name="additional">Mention additional details about the animal</textarea>
        </div>
        </div>
        <a onClick={(e)=>this.handleStep(e,1)} 
                        class="btn btn-success">Next</a>
                        
        </fieldset>
        </div>
        </div>
       
        const pictures = <div  class="panel scale-up-center adoption-form panel-default">
                            <div class="panel-heading">
                            <div className="row">
                            <div className="col-md-8 col-sm-12">
               Show them how adorable I am!
            </div>
            <div className ="col-md-4 col-sm-12">
                <small>
                    Read the Sploot Animal Adoption Policy
                </small>
            </div>
                            </div>
                            </div>
                <div class="panel-body">
                {/* <div className="row"> */}

                        <div className="col-md-4">
                            <p style={{lineHeight:'110%'}}>
                                <h6>
                                Add Clear Images of the Animal.
                                </h6>
                                <small >
                                These Images will help Potential Adopters find an Animal to suit their preferences. 
                                </small> 
                            </p>
                                <Uploader addImage = {this.addImage}/>
                        </div>

                        <div className=" col-md-8">
                            <div className="imPreview">
                            {this.listfiles()}
                            </div>
                            <a style={{marginTop:"10px"}} onClick={(e)=>this.handleStep(e,-1)} class="btn btn-primary">Prev</a> 
                                <a style={{marginTop:"10px"}} onClick={(e)=>this.handleStep(e,1)} 
                                class="btn btn-success">Next</a>
                        </div>

                    {/* </div> */}
                </div></div>
        
        const vaccines = <div  class="panel scale-up-center adoption-form panel-default">
                        <div class="panel-heading">
                        <div className="row">
                        <div className="col-md-8 col-sm-12">
                        Tell them that I'm safe to be around!
                        </div>
                        <div className ="col-md-4 col-sm-12">
                        <small>
                        Read the Sploot Animal Adoption Policy
                        </small>
                        </div>
                                </div>
                                </div>
                        <div class="panel-body">


                        <div className="col-md-12">
                        <table  class="table table-condensed table-hover">
                            <thead>
                            <tr>
                                
                                <th>
                              Date
                                </th>
                                
                                <th>Vaccinated for</th>
                                <th>Vaccine</th>
                                <th>Vial Serial</th>
                         
                            </tr>
                            </thead>
                            <tbody id="vaccineTable" >
                            <tr>
                                <td>
                                <input id="date" name={"vaccine[0][date]"} type="date" className="form-control input-md"  />
                                </td>
                                <td>
                                <input id="pathology" name={"vaccine[0][pathology]"} type="text" className="form-control input-md"  />

                                </td>
                                <td>
                                <input id="vaccine" name={"vaccine[0][vaccine]"} type="text" className="form-control input-md"  />
                                </td>
                                <td>
                                <input id="serial" name={"vaccine[0][serial]"} type="text" placeholder className="form-control input-md"  />

                                </td>
                            </tr>
                     
                            </tbody>
                            <a className="btn btn-info" onClick={this.addVaccine.bind(this)}>Add Vaccine</a>
                            <tfoot>
                                <hr/>
                            You may be required to verify these details during the actual adoption process.
                            </tfoot>
                        </table>



                        <a style={{marginTop:"10px"}} onClick={(e)=>this.handleStep(e,-1)} class="btn btn-primary">Prev</a> 
                                <a style={{marginTop:"10px"}} onClick={(e)=>this.handleStep(e,1)} 
                                class="btn btn-success">Next</a>
              
                        </div>



                        </div>
                        </div>
 
        const finish = <div  class="panel scale-up-center adoption-form panel-default">
        <div class="panel-heading">
        <div className="row">
        <div className="col-md-8 col-sm-12">
        Tell them that I'm safe to be around!
        </div>
        <div className ="col-md-4 col-sm-12">
        <small>
        Read the Sploot Animal Adoption Policy
        </small>
        </div>
                </div>
                </div>
        <div class="panel-body">
        
        
                    <a onClick={(e)=>this.handleStep(e,-1)} 
                    class="btn btn-primary">Prev</a>
                                             <button 
                    type="submit" 
                    class="btn btn-success">Save!</button>
                
        </div></div>

        var panes = [basic,pictures,vaccines,finish]

        return (
            <div className="bodywrapper container ">
                <div className="row">
                <div className="col-md-8">
                <div class="panel-body content" >
                <div class="row">
                {/* New Adoption Sumission Form */}
                    <div class="col-md-12 col-sm-12">
                    
                        {/* Fetch Images from the Request */}

                        {/* Add New Image */}
                  
                        <form onSubmit={this.handleSubmit} class="form-horizontal">
                        <div class="tab-content">
                        <div class=" tab-pane  in active" id="pane0">
                        {panes[0]}
                         </div>
                        <div class="tab-pane " id="pane1">
                        {panes[1]}
                        </div>
                        <div class="tab-pane " id="pane2">
                        {panes[2]}
                        </div>
                        <div class="tab-pane " id="pane3">
                        {panes[3]}
                        </div>
                        </div> 
                 
                        </form>
                    </div>

                </div>
                </div>
                </div>
                
         

                <div className="col-md-4 " >
                <ul class="nav" id="step" >
                    <li><a class="completed step" id="tab0" href="#pane0">
                    1</a>
                    <span >General</span>
                    </li>
                    <li><a className="step"  id="tab1" href="#pane1">2</a>
                    <span >Photos</span></li>
                    <li><a className="step"  id="tab2" href="#pane2">3</a>
                    <span >Vaccination</span>
                    </li>
                    <li><a className="step"  id="tab3" href="#pane3">4</a>
                    <span >Finish</span>
                    </li>
                    
                </ul></div>
         
                </div>





            </div>
        )
    }
} 

