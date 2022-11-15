import React from "react";
import { mont,stand,likon,taller,plain} from "../components/branchesData"
import BranchItem from "../components/BranchItem";
import { useParams } from "react-router-dom";



const Branch = () => {

  let {local} = useParams()
  let {main} = useParams()
  

  return (
  <div className="w-full">

  {(main === "geneva" && local === "plainpalais") && plain.map(({back,bannerh1,bannerh2,bannerp,internet,heroh1,heroh2,p1,p2,p3,p4,herobranch,timeh1,cuph1,cuph2,pica,picb,picc,picd,pice,picf, google })=>( 
    <BranchItem key={heroh1} back={back} bannerh1={bannerh1} bannerh2={bannerh2} bannerp={bannerp} internet={internet} heroh1={heroh1} heroh2={heroh2} p1={p1} p2={p3} p3={p3} p4={p4} herobranch={herobranch} timeh1={timeh1} cuph1={cuph1} cuph2={cuph2} pica={pica} picb={picb} picc={picc} picd={picd} pice={pice} picf={picf} google={google} />
 
  ))}

   {(main === "geneva" && local === "mont-blanc-bis") && mont.map(({back,bannerh1,bannerh2,bannerp,internet,heroh1,heroh2,p1,p2,p3,p4,herobranch,timeh1,cuph1,cuph2,pica,picb,picc,picd,pice,picf, google })=>( 
    <BranchItem key={heroh1} back={back} bannerh1={bannerh1} bannerh2={bannerh2} bannerp={bannerp} internet={internet} heroh1={heroh1} heroh2={heroh2} p1={p1} p2={p3} p3={p3} p4={p4} herobranch={herobranch} timeh1={timeh1} cuph1={cuph1} cuph2={cuph2} pica={pica} picb={picb} picc={picc} picd={picd} pice={pice} picf={picf} google={google} />
 
  ))}

   {(main === "geneva" && local === "rue-du-stand") && stand.map(({back,bannerh1,bannerh2,bannerp,internet,heroh1,heroh2,p1,p2,p3,p4,herobranch,timeh1,cuph1,cuph2,pica,picb,picc,picd,pice,picf, google })=>( 
    <BranchItem key={heroh1} back={back} bannerh1={bannerh1} bannerh2={bannerh2} bannerp={bannerp} internet={internet} heroh1={heroh1} heroh2={heroh2} p1={p1} p2={p3} p3={p3} p4={p4} herobranch={herobranch} timeh1={timeh1} cuph1={cuph1} cuph2={cuph2} pica={pica} picb={picb} picc={picc} picd={picd} pice={pice} picf={picf} google={google} />
 
  ))}

  {(main === "zurich" && local === "talacker") && taller.map(({back,bannerh1,bannerh2,bannerp,internet,heroh1,heroh2,p1,p2,p3,p4,herobranch,timeh1,cuph1,cuph2,pica,picb,picc,picd,pice,picf, google })=>( 
    <BranchItem key={heroh1} back={back} bannerh1={bannerh1} bannerh2={bannerh2} bannerp={bannerp} internet={internet} heroh1={heroh1} heroh2={heroh2} p1={p1} p2={p3} p3={p3} p4={p4} herobranch={herobranch} timeh1={timeh1} cuph1={cuph1} cuph2={cuph2} pica={pica} picb={picb} picc={picc} picd={picd} pice={pice} picf={picf} google={google} />
 
  ))}

  {(main === "zurich" && local === "oerlikon") && likon.map(({back,bannerh1,bannerh2,bannerp,internet,heroh1,heroh2,p1,p2,p3,p4,herobranch,timeh1,cuph1,cuph2,pica,picb,picc,picd,pice,picf, google })=>( 
    <BranchItem key={heroh1} back={back} bannerh1={bannerh1} bannerh2={bannerh2} bannerp={bannerp} internet={internet} heroh1={heroh1} heroh2={heroh2} p1={p1} p2={p3} p3={p3} p4={p4} herobranch={herobranch} timeh1={timeh1} cuph1={cuph1} cuph2={cuph2} pica={pica} picb={picb} picc={picc} picd={picd} pice={pice} picf={picf} google={google} />
 
  ))}

</div>)};

export default Branch;
