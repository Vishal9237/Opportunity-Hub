import mongoose from 'mongoose';
const schema=new mongoose.Schema({opportunityId:{type:mongoose.Schema.Types.ObjectId,ref:'Opportunity',required:true},reporterEmail:{type:String,default:'',maxLength:200},reason:{type:String,enum:['Incorrect deadline','Broken link','Eligibility issue','Duplicate listing','Other'],required:true},details:{type:String,default:'',maxLength:1000},status:{type:String,enum:['Open','Resolved','Dismissed'],default:'Open'}},{timestamps:true});
export default mongoose.model('IssueReport',schema);
