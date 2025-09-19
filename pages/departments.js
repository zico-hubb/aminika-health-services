// pages/departments.js
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Departments() {
  return (
    <>
      <Head>
        <title>Departments & Services — Aminika Medical Services</title>
      </Head>

      <Header />

      <main className="page-container">
        <h2>Departments & Services</h2>
        <p>At Aminika Medical Services, we provide a wide range of medical services designed to meet the diverse healthcare needs of our community.</p>

        <section className="dept-grid">
          <div className="dept-card">
            <h4>Doctor Care and Nursing Care</h4>
            <p>A doctor may visit at a patient at home to diagnose and treat the patient.
              in consultation with a doctor, a registered nurse will set up a plan of care.
              Nursing care may include: wound dressing, ostomy care, intravenous therapy, pain 
              control, administering medicine, monitoring general patient health and other health support.
            </p>
          </div>
           <div className="dept-card">
            <h4>Physical , Occupational and Speech Therapy</h4>
            <p>This helps patients who need help relearning how to perfom daily duties or improve their speech after illness
              or injury. A physical therapist can put together a plan to help patients regain their abilities.
              A speech therapist can help a patient with impaired speech regain their ability to communicate clearly.
            </p>
          </div>

          <div className="dept-card">
            <h4>Laboratory Services</h4>
            <p>Accurate and reliable diagnostic testing with quick turnaround.
              Certain tests such as blood and urine can be done at the comfort of a patients home.
            
            </p>
          </div>


          <div className="dept-card">
            <h4>Radiology & Imaging</h4>
            <p>X-ray and ultrasound services to support clinical decisions.</p>
          </div>

          <div className="dept-card">
            <h4>Pharmacy</h4>
            <p>Well-stocked pharmacy ensuring patients can get prescribed medicines on-site.
              Medicine and medical equipment can be delivered at home and training on how to
              use the equipment given, including intravenous therapy.
            </p>
          </div>

          <div className="dept-card">
            <h4>Specialized Clinics</h4>
            <p>Maternal health, pediatrics, chronic disease management and more.</p>
          </div>

          <div className="dept-card">
            <h4>Preventive Care</h4>
            <p>Vaccinations, wellness checks, and community health education.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
