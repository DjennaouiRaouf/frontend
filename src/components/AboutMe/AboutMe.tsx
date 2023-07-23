import React, {useEffect, useState} from "react";

interface Data {
  data_key: string;
  data_value: string;
}

const AboutMe: React.FC = () =>  {
    const [data,setData]=useState<Data[]>([]);
    const [about,setAbout]=useState<string>('');
    const [fullname,setFullname]=useState<string>('');

  useEffect(() => {
        const array: Data[] = [];
        array.push({ data_key: "Phone Number", data_value:"+213 560-50-73-28" });
        array.push({ data_key: "Email", data_value:"djennaoui.raouf@gmail.com" });
        array.push({ data_key: "Adress", data_value:"Cite COSIDER, La Fonton, Villa N°9,Bouzareah,Algiers" });
        array.push({ data_key: "Country", data_value:"Algeria" });
        array.push({ data_key: "Date of Birth", data_value:"10/04/1996" });
        array.push({ data_key: "Place of Birth", data_value:"Bologhine IBNOU ZIRI" });
        array.push({ data_key: "Studied At", data_value:"USTHB" });
        array.push({ data_key: "Graduate of", data_value:"Master's degree in Bioinformatics" });
        setData(array);
        setFullname('Djennaoui Raouf');
        setAbout('A full-stack developer interested in innovation, I am specialized in the design of high-performance and scalable applications. My goal is to create software solutions that simplify users\' lives and optimize business processes.');
    }, []);

  return (
        <section className="py-4 py-xl-5" style={{"background": "#272e48"}}>
          <div className="container">
            <div className="bg-dark border rounded border-0 border-dark overflow-hidden">
              <div className="row g-0">
                <div className="col-md-6" style={{"background": "#1A233A"}}>
                  <div className="text-white p-4 p-md-5"><img src="assets/img/img3.gif" style={{"width": "260px"}}/>
                    <h2 className="fw-bold text-white mb-3">{fullname}</h2>
                    <p className="mb-4" style={{'textAlign': 'left'}}>{about}</p>
                    <fieldset></fieldset>
                    <ul className="list-group" style={{'textAlign': 'left'}} >
                      {data.map((d,k) => (

                        <li key={k} className="list-group-item"><span>{d.data_key+' : '+d.data_value}</span></li>
                      ))}


                    </ul>
                    <div className="my-3"><a className="btn btn-primary btn-lg me-2" role="button" href="#">Contact
                      Me</a><a className="btn btn-light btn-lg" role="button" href="#">download</a></div>
                  </div>
                </div>
                <div className="col-md-6 order-first order-md-last" style={{"minHeight": "250px","background": "#ffffff"}}><img
                    className="w-100 h-100 fit-cover" src="assets/img/img.png"/></div>
              </div>
            </div>
          </div>
        </section>
    );

}

export default AboutMe;