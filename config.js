// Ghar.com settings
// Sab visitors ke liye listings live karne ke liye: free Supabase project banayein,
// supabase.sql chalayein, phir neeche URL aur anon key paste karein.
// Dono khali rahein to site "demo mode" mein chalti hai (ads sirf usi browser mein save hoti hain).
window.GHAR_CONFIG = {
  supabaseUrl: "https://kyjvhkpkunqaluacnmno.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5anZoa3BrdW5xYWx1YWNubW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU3NzQ2NDAsImV4cCI6MjExMTM1MDY0MH0.jFlMXaCbSgM8EiIksIv81ikjGqWD3yunvCPLuNgSYYc"   // <-- sirf yahan quotes ke andar Ctrl+V karein
};

// Demo mode mein dikhne wali sample listings (Supabase jodne ke baad yeh nahi dikhengi)
window.GHAR_SAMPLES = [
  {id:"s1",sample:true,purpose:"sale",type:"House",city:"Karachi",area:"Saadi Town Block 4",title:"240 sq yd corner house, West open",price:32500000,size:240,unit:"Sq. Yd.",beds:5,baths:5,features:["Corner","West open","Gas","Boundary wall"],desc:"Ground + 1, 5 beds with attached baths, drawing/dining, 2 kitchens. Gas, bijli, paani available. Possession ready.",photos:[],name:"Ghar.com Sample",phone:"0300 0000000",createdBy:"",createdAt:1795700000000},
  {id:"s2",sample:true,purpose:"sale",type:"Plot",city:"Karachi",area:"Scheme 33, Gulzar-e-Hijri",title:"120 sq yd residential plot, leased",price:6500000,size:120,unit:"Sq. Yd.",beds:0,baths:0,features:["Park facing"],desc:"Leased plot, near main road. Construction allowed.",photos:[],name:"Ghar.com Sample",phone:"0300 0000000",createdBy:"",createdAt:1795690000000},
  {id:"s3",sample:true,purpose:"rent",type:"Flat",city:"Karachi",area:"Gulshan-e-Iqbal Block 13",title:"3 bed flat, 2nd floor, with lift",price:65000,size:1400,unit:"Sq. Ft.",beds:3,baths:3,features:["Lift","Parking","Security"],desc:"Family building, reserved parking, 24/7 security.",photos:[],name:"Ghar.com Sample",phone:"0300 0000000",createdBy:"",createdAt:1795680000000},
  {id:"s4",sample:true,purpose:"sale",type:"House",city:"Lahore",area:"DHA Phase 6",title:"1 Kanal modern house, fully furnished",price:95000000,size:1,unit:"Kanal",beds:5,baths:6,features:["Furnished","Parking","Security"],desc:"Modern design, basement, home theatre, lawn.",photos:[],name:"Ghar.com Sample",phone:"0300 0000000",createdBy:"",createdAt:1795670000000},
  {id:"s5",sample:true,purpose:"rent",type:"Upper Portion",city:"Islamabad",area:"G-13/1",title:"10 marla upper portion, separate entrance",price:75000,size:10,unit:"Marla",beds:3,baths:2,features:["Gas","Parking"],desc:"Separate gate, family preferred.",photos:[],name:"Ghar.com Sample",phone:"0300 0000000",createdBy:"",createdAt:1795660000000},
  {id:"s6",sample:true,purpose:"sale",type:"Shop",city:"Karachi",area:"Bahria Town, Midway Commercial",title:"Ground floor shop on main boulevard",price:18500000,size:350,unit:"Sq. Ft.",beds:0,baths:1,features:["Corner"],desc:"High footfall, rented out, good ROI.",photos:[],name:"Ghar.com Sample",phone:"0300 0000000",createdBy:"",createdAt:1795650000000}
];
