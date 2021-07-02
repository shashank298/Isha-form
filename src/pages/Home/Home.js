import React, { Component } from 'react'
import CustomButton from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import InputField from '../../components/Input/Input'
import {Switch,Dialog} from '@material-ui/core';
import CustomSlider from '../../components/Slider/Slider';
import CustomSelect from '../../components/Select/Select';
import Collage from '../../components/Collage/Collage';
import ChipsArray from '../../components/Chips/Chips';
import Title from '../../components/Title/MainTitle';
import SubTitle from '../../components/Title/SubTitle';
import { setData } from "../../services/index";

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fullName:'',
             codeName:'',
             region:'',
             slider:60,
             avatar:{},
             packs:[],
             openAddPopup:false,
             needABag:true,
             item:'',
             itemQuantity:5,
            itemValidationError:false,
            errors:{}
        }

        this.selectAvatar=this.selectAvatar.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.openAddPopup=this.openAddPopup.bind(this);

    }
    
    changeHandler(e){
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name=e.target.name
        if(name==='item'){
            this.setState({ [name]: value,itemValidationError:false})
        }else{
        this.setState({
            [name]: value
        })
        }
    }
    handleSlider(e,val){
        this.setState({
          slider:val
        })
    }

    handleItemQuantity(e,val){
        this.setState({
          itemQuantity:val
        })
    }

    selectAvatar(name,url){
        this.setState({
            avatar:{name,url}
        })
    }

    handleDelete = (chipToDelete) => () => {
        const packs= this.state.packs.filter(chip => chip !== chipToDelete);
        this.setState({
            packs
        })
    };

    openAddPopup=()=>{
        this.setState({openAddPopup:true})
    }
    handleClose=()=>{
        this.setState({openAddPopup:false})
    }

    clearData=()=>{
        this.setState({
            fullName:'',
             codeName:'',
             region:'',
             slider:60,
             avatar:{},
             packs:[],
             openAddPopup:false,
             needABag:true,
             item:'',
             itemQuantity:5,
            itemValidationError:false,
            errors:{}
        })
    }

    addChips=()=>{
        let temp={}
        temp.item=this.state.item?'':'Please choose something'
        this.setState({errors:temp})
        if(temp.item===''){
           const packs=[...this.state.packs,`${this.state.itemQuantity} ${this.state.item}`]
            this.setState({
                packs
            })
            this.handleClose()
        }
    }

    validate=()=>{
        let temp={}
        temp.fullName=this.state.fullName?'':'Please enter your full name'
        temp.codeName=this.state.codeName?'':'Please enter your code name'
        temp.region=this.state.region?'':'Please select the region'
        temp.avatar=Object.keys(this.state.avatar).length !== 0?'':'Please select any avatar'
        temp.packs=this.state.packs.length!==0?'':'Please add something in your packs'
        this.setState({errors:temp})
        return Object.values(temp).every(x=>x==='')
    }

    submitDetails=()=>{
        let isValid=this.validate()
        console.log(isValid)
        if(isValid){
            const dataObj={
                fullName:this.state.fullName,
                codeName:this.state.codeName,
                slider:this.state.slider,
                region:this.state.region,
                avatar:this.state.avatar,
                packs:this.state.packs
            }
            setData(dataObj)
            this.clearData()
            this.props.history.push('/view')
        }
    }
    render() {
        return (
            <div className='home-page'>
                <Card>
                    <div className='card-header'>
                        <Title>
                         Fill This Form
                        </Title>
                        <SubTitle>
                            We'll use this info to dominate the poke world! Muhahahahah
                        </SubTitle>
                    </div>
                    <InputField id="fullName" label="Full Name" name='fullName' value={this.state.fullName} onChange={e=>this.changeHandler(e)} error={this.state.errors.fullName} />
                    <InputField id="codeName" label="Code Name" name='codeName' value={this.state.codeName} onChange={e=>this.changeHandler(e)} error={this.state.errors.codeName}/>
                    <CustomSlider step={10} min={1} max={100} defaultValue={60} name='slider' onChange={(e,val)=>this.handleSlider(e,val)} placeholder="How far is your nearest pokemon center? (In KMs)"/>
                    <CustomSelect placeholder="What's your starting region?" name='region' value={this.state.region} onChange={e=>this.changeHandler(e)} options={['Kanto','Jhoto','Hoenn']} error={this.state.errors.region}/>
                    <Collage region={this.state.region} onClick={this.selectAvatar} error={this.state.errors.avatar}/>
                    <ChipsArray onClick={this.handleDelete} chipData={this.state.packs} openAddPopup={this.openAddPopup} error={this.state.errors.packs}/>
                    <CustomButton onClick={e=>this.submitDetails()}>START MY JOURNEY</CustomButton>
                </Card>
                
                     
                <Dialog open={this.state.openAddPopup}  onClose={e=>this.handleClose()}>
                    <Card>
                        <div className='card-header'>
                            <Title>
                                Place Your Order
                            </Title>
                            <SubTitle>
                                We'll use this to pack your order! Muhahahahah
                            </SubTitle>
                        </div>
                        <CustomSelect placeholder="Choose item" name='item' value={this.state.item} onChange={e=>this.changeHandler(e)} options={['Poke Ball','Great Ball','Super Potion','Hyper Potion']} error={this.state.errors.item}/>
                        <CustomSlider name='itemQuantity' min={1} max={100} defaultValue={5} onChange={(e,val)=>this.handleItemQuantity(e,val)} placeholder='Select Quantity'/>
                        
                             <div className='custom-switch'>
                                <span>I need a bag for that!</span>
                                <Switch
                                    checked={this.state.needABag}
                                    onChange={e=>this.changeHandler(e)}
                                    name="needABag"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </div>
                        <CustomButton onClick={e=>this.addChips()}>ADD TO CART</CustomButton>
                    </Card>
                </Dialog>
                
            </div>
        )
    }
}