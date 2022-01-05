import React, { useEffect, useState} from 'react';
import { Container, Content, Form, Item,Text,Button,Label, Input,Card, CardItem,Textarea,Root,Toast} from 'native-base';
import {  View, TouchableOpacity,TextInput,StatusBar,Picker,
    Platform ,
    ImageBackground,StyleSheet,ScrollView,Dimensions,Image,Icon,
    TouchableWithoutFeedback,Keyboard
 } from 'react-native';


 import { ProgressDialog } from 'react-native-simple-dialogs';
 import moment from 'moment';
 import { LogBox } from 'react-native';

 LogBox.ignoreLogs(['Warning: ...']);
 

 LogBox.ignoreAllLogs();
 const currentTime = moment();
 import ImagePicker from 'react-native-image-picker'
 import DateTimePickerModal from "react-native-modal-datetime-picker";
  //  import Icon from 'react-native-vector-icons/dist/FontAwesome';
  import Iconss from 'react-native-vector-icons/MaterialIcons';
  import Icons from 'react-native-vector-icons/FontAwesome';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Home = () => {
    
    const [eventCat, seteventCat] = useState("");
    const [name_contact_person, setname_contact_person] = useState("");
    const [designation, setdesignation] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [landmark, setlandmark] = useState("");
    const [already_register, setalready_register] = useState("");
    const [target, setTarget] = useState("");
    const [image, setImage] = useState(null)
    const [forOne, setFormOne]=useState(true)
    const [subcategory, setSubcategory]=useState('')
    const [venueadd, setVanue]=useState('')
    const [objectives, setObjectives] = useState('')
    const [event, setEvent] = useState('')
    const [imageUploading, setImageUploading] = useState(false)
    const [uploadStatus, setUploadStatus] = useState(null)
    const [description, setDescription] = useState('')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisibleend, setDatePickerVisibilityend] = useState(false);

    const datte=moment(new Date(),"DD-MM-YYYY")
    const myDate = moment(datte, 'DD-MM-YYYY').toDate();

    const [startdate, seStartDate]=useState(myDate);
    const [endtdate, setEndDate]=useState(myDate);
    const tosstaAlert=()=>{
        return (
          Toast.show({
            text: "All Field require",
            
            buttonTextStyle: { color: "#008000" },
            style: { marginBottom: 60, marginHorizontal:15,borderRadius:10},
            textStyle:{textAlign:"center"}
           
          })
        );
      }
    const tosstaAlertsuscc=()=>{
        return (
          Toast.show({
            text: "Data save Successfull",
            
            buttonTextStyle: { color: "#008000" },
            style: { marginBottom: 60, marginHorizontal:15,borderRadius:10},
            textStyle:{textAlign:"center"}
           
          })
        );
      }

    const showDatePicker = () => {
      setDatePickerVisibility(true);
     //alert('sssssss')
     Keyboard.dismiss();
    };
   
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
   
    const handleConfirm = (date) => {
      //console.warn("A date has been picked: ", date);
      seStartDate(date);
      hideDatePicker();
    }
 
    const  hideDateTimePicker = () => {
        setDatePickerVisibility(false);
      };

    {/**=================== */}
    const showDatePickerend = () => {
        setDatePickerVisibilityend(true);
       //alert('sssssss')
       Keyboard.dismiss();
      };
     
    const hideDatePickerend = () => {
        setDatePickerVisibilityend(false);
      };
     
 
    const handleConfirmend = (date) => {
        //console.warn("A date has been picked: ", date);
        setEndDate(date);
        hideDatePickerend();
      }
    const  hideDateTimePickerend = () => {
          setDatePickerVisibilityend(false);
        };

  {/**=================== */}
    const pickImage = async () => {
        ImagePicker.showImagePicker( (response) => {
            console.log('Response = ', response)

            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                console.log(response.fileName,'hh',response.path,response.type)
                //uploadImage(response)
                setImage(response)
               
              }
             
               
        })
      };
     
const next=()=>{
     //setFormOne(!forOne)
    //  if(selectedValue=="" || target===""  ){
    //     alert('alll');
        
    //  }
    const sendStartDate=startdate.getDate()+'-'+startdate.getMonth()+1+'-'+startdate.getFullYear();

const semdEndDate=endtdate.getDate()+'-'+endtdate.getMonth()+1+'-'+endtdate.getFullYear();
     if(target=='' || eventCat=='' || subcategory=='' ||sendStartDate=='' ||semdEndDate=='' || venueadd=='' ||
     event=='' ||objectives=='' ||target=='' ||image==''){
         tosstaAlert()
         //console.log(target,eventCat,subcategory,sendStartDate,semdEndDate,venue,event,objectives,image)
 
     }else{
        setFormOne(false)
     }
}
const submit=()=>{
    alert('Submit Successfull')
}
const cancle=()=>{
    alert('Fill-Up All Field')
}
const reset=()=>{
    seteventCat('')
    setname_contact_person('')
    setdesignation('')
    setemail('')
    setmobile('')
    setlandmark('')
    setalready_register('')
    setTarget('')
    setImage('')
    setSubcategory('')
    setVanue('')
    setObjectives('')
    setEvent('')
   
}
const save=async ()=>{
    //console.log(target)
const sendStartDate=startdate.getDate()+'-'+startdate.getMonth()+1+'-'+startdate.getFullYear();

const semdEndDate=endtdate.getDate()+'-'+endtdate.getMonth()+1+'-'+endtdate.getFullYear();

    if(target=='' || eventCat=='' || subcategory=='' || sendStartDate=='' || semdEndDate=='' || venueadd=='' ||
    event=='' || objectives=='' || target==''||email==''|| mobile=='' || landmark=='' || designation==''){
        tosstaAlert()

    }else{
        setImageUploading(true)

            let localUri = image.uri;
            let filename = image.fileName;
        
            // Infer the type of the image
           // let match = /\.(\w+)$/.exec(filename);
            let type =image.type;
           // let type ='image/jpg';
           // console.log(localUri,'jj','filename','')
            // Upload the image using the fetch and FormData APIs
            let formData = new FormData();
           // console.log(localUri,'localUri')
           // console.log(filename,'filename')
           // console.log(type,'type')
            // Assume "photo" is the name of the form field the server expects
            // console.log(image,eventCat,subcategory,sendStartDate,semdEndDate,venueadd,objectives,event,target,already_register,already_register,name_contact_person,
            //     email,mobile,landmark,designation)
            formData.append('image', { uri: localUri, name: filename, type });
           // formData.append('image', { uri: image});
            formData.append('event_category',eventCat);
            formData.append('event_sub_category',subcategory);
            formData.append('start_date',sendStartDate);
            formData.append('end_date',semdEndDate);
            formData.append('venue',venueadd);
            formData.append('objectives',objectives);
            formData.append('about_event',event);
            formData.append('target_group',target);
            formData.append('already_register',already_register);
            formData.append('name_contact_person',name_contact_person);
            formData.append('email',email);
            formData.append('mobile',mobile);
            formData.append('landmark',landmark);
            formData.append('designation',designation);
            
            return await fetch('http://reactnative.ultrawebtech.com/api/event', {
            method: 'POST',
            body: formData,
            headers: {
                'content-type': 'multipart/form-data',
            },
            }).then(res=>{
                return res.json()
            }).then(data=>{
                setImageUploading(false)
                //console.log(data)
                tosstaAlertsuscc()
                reset()
                setFormOne(true)
                alert('Data save Successfull')
            }).catch(err=>console.log(err));
        }
}
    return (
        <Root>
        <ImageBackground source={require('../../src/images/drawerBackgroun.jpg')}
        style={styles.bakground}>
          <StatusBar hidden={true} />
          <ScrollView style={styles.scrollView}>
        
    
       <Text style={{fontSize:30,color:"red", marginTop:5,textAlign:"center"}}>Event Planning</Text>
      {forOne?
          (
            <Form>
                <Card >
                    <CardItem style={styles.cardViewItem}>
                        <Text>Event Category</Text>
                        <Picker
                            selectedValue={eventCat}
                            style={{ height: 30, width:150 }}
                            onValueChange={(itemValue, itemIndex) => seteventCat(itemValue)}>
                            <Picker.Item label="Agriculture Exhibit" value="Agriculture Exhibition" />
                            <Picker.Item label="Agriculture Method Demonstration" value="Agriculture Method Demonstration" />
                            <Picker.Item label="Farmers & Farm women Training" value="Farmers & Farm women Training" />
                            <Picker.Item label="Farmers Visit to KVK" value="Farmers Visit to KVK" />
                            <Picker.Item label="Field Day" value="Field Day" />
                            <Picker.Item label="Film show" value="Film show" />
                            <Picker.Item label="Garib Kalyan Rojgar Abhiyaan" value="Garib Kalyan Rojgar Abhiyaan" />
                            <Picker.Item label="Group Meetings" value="Group Meetings" />
                            <Picker.Item label="Inaugural Function of Krishi Kalyan Abhiyan II" value="Inaugural Function of Krishi Kalyan Abhiyan II" />
                            <Picker.Item label="In-Service training" value="In-Service training" />
                            <Picker.Item label="Jal Shakti Abhiyan" value="Jal Shakti Abhiyan" />
                            <Picker.Item label="Kisan Goshthi" value="Kisan Goshthi" />
                            <Picker.Item label="Kishan Mela" value="Kishan Mela" />
                            <Picker.Item label="Krishi Kalyan Abhiyan I" value="Krishi Kalyan Abhiyan I" />
                            <Picker.Item label="Krishi Unnati Mela IARI" value="Krishi Unnati Mela IARI" />
                            <Picker.Item label="Other Event" value="16.	Other Event" />
                            <Picker.Item label="Other Extension Activities" value="Other Extension Activities" />
                            <Picker.Item label="Other Training" value="Other Training" />
                            <Picker.Item label="Poshan Maah 2020" value="Poshan Maah 2020" />
                            <Picker.Item label="Pradhan Mantri Kisan Samman Nidhi (PM-Kisan)" value="Pradhan Mantri Kisan Samman Nidhi (PM-Kisan)" />
                            <Picker.Item label="Sankalp Se siddhi" value="Sankalp Se siddhi" />
                            <Picker.Item label="School Dropouts Training" value="School Dropouts Training" />
                            <Picker.Item label="Scientist Visit to farmers field" value="Scientist Visit to farmers field" />
                            <Picker.Item label="Seminar" value="Seminar" />
                            <Picker.Item label="Skill Development Training" value="Skill Development Training" />
                            <Picker.Item label="Swachhata Hi Seva" value="Swachhata Hi Seva" />
                            <Picker.Item label="Vocational Training  for youth (more than 4 days)"
                             value="Vocational Training  for youth (more than 4 days)" />
                            <Picker.Item label="Workshop" value="Workshop" />
                            <Picker.Item label="World soil day" value="World soil day" />
                            
                        </Picker>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem style={styles.cardViewItem}>
                        <View style={styles.cardLeft}> 
                            <Text >Sub Category</Text>
                        </View> 
                        <View  style={{width:"50%",flexDirection:"row",
                                height:"100%",justifycontent:"center",
                                alignItems:"center"}}>
                            <TextInput style={styles.inputsty}
                                placeholderTextColor="red"
                                placeholderTextSize ='30'
                                autoCorrect={false}
                                value={subcategory}
                                onChangeText={(subcategory)=>{setSubcategory(subcategory)}}
                                autoCapitalize="none"
                                />
                        </View>  
                    </CardItem>
                </Card>
                {/*    ====================== */ }
                <Card>
                    <CardItem style={styles.cardViewItem}>
                        <View style={styles.cardLeft}> 
                            <Text >Start Date</Text>
                        </View> 
                        <View  style={{width:"50%",flexDirection:"row", height:"100%",justifycontent:"center",alignItems:"center"}}>
                            <Item    style={styles.itemContainer}>
                                <TouchableOpacity onPress={showDatePicker} style={{width:"100%", height:"100%"}}>
                                    <Input  style={styles.input}
                                    caretHidden accessible={false}
                                    onChange={(startdate)=>handleConfirm(startdate)} 
                                    value={startdate ? moment(startdate).format('DD-MM-YYYY') :moment(new Date()).format("DD-MM-YYYY")} 
                                    onFocus={showDatePicker}  onBlur={hideDateTimePicker}
                                    /> 
                                    </TouchableOpacity>
                                    <DateTimePickerModal
                                        isVisible={isDatePickerVisible}
                                        mode="date"
                                        onConfirm={handleConfirm}
                                        onCancel={hideDatePicker}
                                    />
                            </Item>
                        </View> 
                </CardItem>
              </Card>
              
               {/*   end date ====================== */ }
                <Card>
                    <CardItem style={styles.cardViewItem}>
                        <View style={styles.cardLeft}> 
                            <Text >End Date</Text>
                        </View> 
                        <View  style={{width:"50%",flexDirection:"row", height:"100%",justifycontent:"center",alignItems:"center"}}>
                            <Item    style={styles.itemContainer}>
                                <TouchableOpacity onPress={showDatePickerend} style={{width:"100%", height:"100%"}}>
                                    <Input  style={styles.input}
                                    caretHidden accessible={false}
                                    onChange={(startdate)=>handleConfirmend(startdate)} 
                                    value={endtdate ? moment(endtdate).format('DD-MM-YYYY') :moment(new Date()).format("DD-MM-YYYY")} 
                                    onFocus={showDatePickerend}  onBlur={hideDateTimePickerend}
                                    /> 
                                    </TouchableOpacity>
                                    <DateTimePickerModal
                                        isVisible={isDatePickerVisibleend}
                                        mode="date"
                                        onConfirm={handleConfirmend}
                                        onCancel={hideDatePickerend}
                                />
                            </Item>
                        </View> 
                </CardItem>
              </Card>
                <Card>
                    <CardItem style={styles.cardViewItem}>
                        <View style={styles.cardLeft}> 
                            <Text >Vanue</Text>
                        </View> 
                        <View  style={{width:"50%",flexDirection:"row",
                            height:"100%",justifycontent:"center",
                            alignItems:"center"}}>
                            <Textarea
                                rowSpan={3}
                                placeholder="Some Vanue................"
                                value={venueadd}
                                style={styles.textarea}
                                onChangeText={(venueadd) => setVanue(venueadd)}
                            />
                        </View>  
                    </CardItem>
                </Card>
                 {/*    ====================== */ }
                <Card>
                    <CardItem style={styles.cardViewItem}>
                        <View style={styles.cardLeft}> 
                            <Text >Objectives</Text>
                        </View> 
                        <View  style={{width:"50%",flexDirection:"row",
                            height:"100%",justifycontent:"center",
                            alignItems:"center"}}>
                            <Textarea
                                rowSpan={3}
                                placeholder="Some Objectives......."
                                value={objectives}
                                style={styles.textarea}
                                onChangeText={(objectives) => setObjectives(objectives)}
                            />
                        </View>  
                    </CardItem>
                </Card>
               {/*    ====================== */ }
                {/*  About the Event  ====================== */ }
                <Card>
                    <CardItem style={styles.cardViewItem}>
                        <View style={styles.cardLeft}> 
                            <Text > About The Event</Text>
                        </View> 
                        <View  style={{width:"50%",flexDirection:"row",
                            height:"100%",justifycontent:"center",
                            alignItems:"center"}}>
                            <Textarea
                                rowSpan={3}
                                placeholder="About The Event......."
                                value={event}
                                style={styles.textarea}
                                onChangeText={(event) => setEvent(event)}
                            />
                        </View>  
                    </CardItem>
                </Card>
               {/*  About the Event  ====================== */ }
               <Card >
                    <CardItem style={styles.cardViewItem}>
                        <Text>Target Group</Text>
                        <Picker
                            selectedValue={target}
                            style={{ height: 30, width:150 }}
                            onValueChange={(itemValue, itemIndex) => setTarget(itemValue)}>
                            <Picker.Item label="Employees" value="Employees " />
                            <Picker.Item label="Extension workers" value="Extension workers " />
                            <Picker.Item label="Farm Women" value="Farm Women" />
                            <Picker.Item label="Farmer" value="Farmer" />
                            <Picker.Item label="General Users" value="General Users" />
                            <Picker.Item label="Migrant Labour" value="Migrant Labour" />
                            <Picker.Item label="Others" value="Others" />
                            <Picker.Item label="Self Help Group" value="Self Help Group" />
                            <Picker.Item label="Unemployed Youth" value="Unemployed Youth" />
                          
                        </Picker>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem style={styles.cardViewItem}>
                        <View style={styles.cardLeft}> 
                            <Text >LeafLet</Text>
                        </View> 
                        <View  style={{width:"50%",flexDirection:"row",
                            height:"100%",justifycontent:"center",
                                
                            alignItems:"center"}}>
                            <Button
                                regular
                                block
                                success
                                onPress={pickImage}
                                >
                                <Text style={{color: '#fdcb9e',}}>Choose Image</Text>
                            </Button>
                        </View>  
                    </CardItem>
                </Card>
        </Form>



          ):(
              <>
             
              <Card >
                    <CardItem style={styles.cardViewItem}>
                        <Text>Already Registered</Text>
                        <Picker
                            selectedValue={already_register}
                            style={{ height: 30, width:150 }}
                            onValueChange={(itemValue, itemIndex) => setalready_register(itemValue)}>
                            <Picker.Item label="Agriculture Exhibit" value="Agriculture Exhibition" />
                            <Picker.Item label="Agriculture Method Demonstration" value="Agriculture Method Demonstration" />
                            <Picker.Item label="Farmers & Farm women Training" value="Farmers & Farm women Training" />
                            <Picker.Item label="Farmers Visit to KVK" value="Farmers Visit to KVK" />
                            <Picker.Item label="Field Day" value="Field Day" />
                            <Picker.Item label="Film show" value="Film show" />
                            <Picker.Item label="Garib Kalyan Rojgar Abhiyaan" value="Garib Kalyan Rojgar Abhiyaan" />
                            <Picker.Item label="Group Meetings" value="Group Meetings" />
                            <Picker.Item label="Inaugural Function of Krishi Kalyan Abhiyan II" value="Inaugural Function of Krishi Kalyan Abhiyan II" />
                            <Picker.Item label="In-Service training" value="In-Service training" />
                            <Picker.Item label="Jal Shakti Abhiyan" value="Jal Shakti Abhiyan" />
                            <Picker.Item label="Kisan Goshthi" value="Kisan Goshthi" />
                            <Picker.Item label="Kishan Mela" value="Kishan Mela" />
                            <Picker.Item label="Krishi Kalyan Abhiyan I" value="Krishi Kalyan Abhiyan I" />
                            <Picker.Item label="Krishi Unnati Mela IARI" value="Krishi Unnati Mela IARI" />
                            <Picker.Item label="Other Event" value="16.	Other Event" />
                            <Picker.Item label="Other Extension Activities" value="Other Extension Activities" />
                            <Picker.Item label="Other Training" value="Other Training" />
                            <Picker.Item label="Poshan Maah 2020" value="Poshan Maah 2020" />
                            <Picker.Item label="Pradhan Mantri Kisan Samman Nidhi (PM-Kisan)" value="Pradhan Mantri Kisan Samman Nidhi (PM-Kisan)" />
                            <Picker.Item label="Sankalp Se siddhi" value="Sankalp Se siddhi" />
                            <Picker.Item label="School Dropouts Training" value="School Dropouts Training" />
                            <Picker.Item label="Scientist Visit to farmers field" value="Scientist Visit to farmers field" />
                            <Picker.Item label="Seminar" value="Seminar" />
                            <Picker.Item label="Skill Development Training" value="25.	Skill Development Training" />
                            
                        </Picker>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem style={styles.cardViewItem}>
                        <View style={styles.cardLeft}> 
                            <Text >Name Of Contact Person</Text>
                        </View> 
                        <View  style={{width:"50%",flexDirection:"row",
                                height:"100%",justifycontent:"center",
                                alignItems:"center"}}>
                            <TextInput style={styles.inputsty}
                                placeholderTextColor="red"
                                placeholderTextSize ='30'
                                autoCorrect={false}
                                value={name_contact_person}
                                onChangeText={(name_contact_person)=>{setname_contact_person(name_contact_person)}}
                                autoCapitalize="none"
                                />
                        </View>  
                    </CardItem>
                </Card>
               
                <Card>
                    <CardItem style={styles.cardViewItem}>
                        <View style={styles.cardLeft}> 
                            <Text >Designation</Text>
                        </View> 
                        <View  style={{width:"50%",flexDirection:"row",
                                height:"100%",justifycontent:"center",
                                alignItems:"center"}}>
                            <TextInput style={styles.inputsty}
                                placeholderTextColor="red"
                                placeholderTextSize ='30'
                                autoCorrect={false}
                                autoCapitalize="none"
                                value={designation}
                                onChangeText={(designation)=>{setdesignation(designation)}}
                                />
                        </View>  
                    </CardItem>
                </Card>
                <Card>
                    <CardItem style={styles.cardViewItem}>
                        <View style={styles.cardLeft}> 
                            <Text >Email</Text>
                        </View> 
                        <View  style={{width:"50%",flexDirection:"row",
                                height:"100%",justifycontent:"center",
                                alignItems:"center"}}>
                            <TextInput style={styles.inputsty}
                                placeholderTextColor="red"
                                placeholderTextSize ='30'
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                value={email}
                                onChangeText={(email)=>setemail(email)}
                                />
                        </View>  
                    </CardItem>
                </Card>
                <Card>
                    <CardItem style={styles.cardViewItem}>
                        <View style={styles.cardLeft}> 
                            <Text >Mobile Number</Text>
                        </View> 
                        <View  style={{width:"50%",flexDirection:"row",
                                height:"100%",justifycontent:"center",
                                alignItems:"center"}}>
                            <TextInput style={styles.inputsty}
                                placeholderTextColor="red"
                                placeholderTextSize ='30'
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="name-phone-pad"
                                value={mobile}
                                onChangeText={(mobile)=>setmobile(mobile)}
                                />
                        </View>  
                    </CardItem>
                </Card>
                <Card>
                    <CardItem style={styles.cardViewItem}>
                        <View style={styles.cardLeft}> 
                            <Text >Land Mark</Text>
                        </View> 
                        <View  style={{width:"50%",flexDirection:"row",
                                height:"100%",justifycontent:"center",
                                alignItems:"center"}}>
                            <TextInput style={styles.inputsty}
                                placeholderTextColor="red"
                                placeholderTextSize ='30'
                                autoCorrect={false}
                                autoCapitalize="none"
                                value={landmark}
                                onChangeText={(landmark)=>{setlandmark(landmark)}}
                                />
                        </View>  
                    </CardItem>
                </Card>
              </>
          )
      }

                <Card>
                    <CardItem style={styles.cardViewItem}>
                        <View style={[styles.cardLeft]}> 
                        {/* {forOne?( <Button
                                regular
                                block
                                info
                                onPress={next}
                                >
                                <Text style={{color: '#fdcb9e',}}>Next</Text>
                            </Button>):( <Button
                                regular
                                block
                                info
                                onPress={next}
                                >
                                <Text style={{color: '#fdcb9e',}}>prev</Text>
                            </Button>)}  */}
                              {forOne?(
                            <Button
                                regular
                                block
                                info
                                onPress={next}
                                >
                                <Text style={{color: '#fdcb9e',}}>Next</Text>
                            </Button>):( <Button
                                regular
                                block
                                info
                                onPress={cancle}
                                >
                                <Text style={{color: '#fdcb9e',}}>Cancle</Text>
                            </Button>)
                            }
                        </View> 
                        <View  style={{width:"50%",flexDirection:"row",
                            height:"100%",justifyContent:"flex-end",
                            alignItems:"center"}}>
                              {forOne?(<Button
                                regular
                                block
                                warning
                                onPress={reset}
                                
                                >
                                <Text style={{color: 'white',}}>Reset</Text>
                            </Button>):(<Button
                                regular
                                block
                                warning
                                onPress={save}
                                
                                >
                                <Text style={{color: 'white',}}>Submit</Text>
                            </Button>)}
                            
                        </View>  
                    </CardItem>
                </Card>
               
        <View style={styles.three}>
        <ProgressDialog
            visible={imageUploading}
            title="Data Saving"
            message="Please, wait..."
            titleStyle={{color:"red", textAlign:'center'}}
            messageStyle={{color:"green", textAlign:"center"}}
            contentStyle={{alignItems:"center"}}
            dialogStyle={{borderRadius:10}}
            activityIndicatorColor="blue"
            activityIndicatorSize="large"
        />

            <View style={styles.empty} >
           
            </View>
        </View>
   </ScrollView>
    </ImageBackground>
    </Root>

    )
}

export default Home

const styles = StyleSheet.create({
    bakground: {
        flex:1,
        paddingVertical:10
        },
        scrollView:{
        flex:1,
    },
    logoContainer:{
        paddingTop:10,
        marginTop:20,
        justifyContent:'center',
        alignItems:"center",
        width:Dimensions.get('window').width,
        height:"35%"
    },
    cardViewItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10
    },
    cardLeft:{
        width:"50%",
        flexDirection:'row', 
        height:"100%",
        alignItems:"center",                    
        justifyContent:"flex-start",
    },
    textarea:{
        borderColor:"red",
        borderRadius:5,
        borderWidth:1
    },
    button:{
        marginVertical:10,
    },
    two:{
        width:Dimensions.get('window').width,
        height:"50%",
        paddingHorizontal:15
    },
    labeltext:{
        marginLeft:10,
        color:"red",
        marginVertical:10
    },
    three:{
        justifyContent:"center",
        alignItems:"center",
        width:Dimensions.get('window').width,
        height:"15%",
    },
    inputsty:{
    
        height:"100%",
        borderRadius:10,
        borderColor:"red",
        borderWidth:1,
        width:"100%",
        paddingVertical:8
       

    },
    emtyheight:{
        height:1000
        },
        username:{
        width:'90%',
        height:40,
        borderRadius:10,
        marginTop:10
    },
    socialView:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        alignContent:"center",
        justifyContent:"center"
    },
    scrollView:{
        paddingHorizontal:5

    },
        
    password:{
        width:'80%',
        height:40,
        borderRadius:10,
        marginTop:10
    },
    item:{
        // border:transparent,
        flexDirection:"row",
       
        opacity:0.5,
        // borderColor:'transparent',
        width:"100%",
        //borderColor:'transparent',
        marginTop:8,
        justifyContent:"space-between",
        alignItems:"center"
    },
    placeholder:{
        paddingVertical:7,
        fontSize:18,
        width:"90%",
    },
    iocns:{
        color:'#0A79DF',
        width:"10%",
        flexDirection:"row",
        textAlign:'right'
    },
    buttontext:{
        backgroundColor: '#fff',
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    empty:{
        height:250
    },
    create:{
        alignItems:"center",
        paddingHorizontal:30,
        justifyContent:"center",
        marginTop:22,
        marginBottom:16,
        backgroundColor:"#EEC213",
        marginHorizontal:25,
        borderRadius:20
    },
    itemContainer: {
        borderBottomWidth:0,
        width:"100%",
        height:"100%"
    },
    input:{
          width:"80%",
          borderRadius:10,
          borderWidth:0.5,
          height:40,
          padding:10,
          fontSize:16,
          backgroundColor:'#fff'
    },
    image: {width: null, height: 150, marginVertical: 15},
})

