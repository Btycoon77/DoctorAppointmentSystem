import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Checkbox } from "antd";

const RecommendDoctor = () => {
  const recommendDoctor = () => {};

  const [checked, setChecked] = useState(new Array(props.items.length).fill(false));

  const handleCheckboxChange = (event, index) => {
    const newChecked = [...checked];
    newChecked[index] = event.target.checked;
    setChecked(newChecked);

    console.log("Checkbox with index", index, "is now", event.target.checked);
  };

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const options = [
    {
      label:  `
      Chest pain or discomfort \n
      Shortness of breath
      Palpitations (an irregular or rapid heartbeat)
      Dizziness or lightheadedness
      Fainting or loss of consciousness
      Swelling in the legs, ankles, or feet
      Fatigue or weakness
      High blood pressure
      Family history of heart disease or stroke
      Irregular pulse
      Heart murmurs
      Difficulty breathing
      Rapid weight gain`,
      value: `
      Chest pain or discomfort
      Shortness of breath
      Palpitations (an irregular or rapid heartbeat)
      Dizziness or lightheadedness
      Fainting or loss of consciousness
      Swelling in the legs, ankles, or feet
      Fatigue or weakness
      High blood pressure
      Family history of heart disease or stroke
      Irregular pulse
      Heart murmurs
      Difficulty breathing
      Rapid weight gain`,
    },
    {
      label: `
      Tooth pain or sensitivity
      Gum swelling, bleeding, or tenderness
      Persistent bad breath or bad taste in your mouth
      Loose teeth or shifting of teeth
      Jaw pain or clicking/popping sounds when opening and closing your mouth
      Mouth sores or ulcers
      Difficulty chewing or biting
      Teeth grinding or clenching
      Dry mouth
      Visible holes or dark spots on your teeth`,
      value: `
      Tooth pain or sensitivity
      Gum swelling, bleeding, or tenderness
      Persistent bad breath or bad taste in your mouth
      Loose teeth or shifting of teeth
      Jaw pain or clicking/popping sounds when opening and closing your mouth
      Mouth sores or ulcers
      Difficulty chewing or biting
      Teeth grinding or clenching
      Dry mouth
      Visible holes or dark spots on your teeth`,
    },
    {
      label: `Joint pain, swelling, or stiffness
      Reduced range of motion or difficulty moving a joint
      Joint instability or feeling that a joint might give way
      Pain in the muscles, tendons, or ligaments
      Weakness or numbness in the limbs
      Difficulty performing daily activities or participating in sports
      Chronic pain in the back, neck, or shoulders
      Deformity or abnormality of a joint or limb
      Clicking or popping sounds in a joint
      Bone fractures or dislocations
      Pain or discomfort associated with arthritis
      Pain or discomfort associated with osteoporosis
      `,
      value: `Joint pain, swelling, or stiffness
      Reduced range of motion or difficulty moving a joint
      Joint instability or feeling that a joint might give way
      Pain in the muscles, tendons, or ligaments
      Weakness or numbness in the limbs
      Difficulty performing daily activities or participating in sports
      Chronic pain in the back, neck, or shoulders
      Deformity or abnormality of a joint or limb
      Clicking or popping sounds in a joint
      Bone fractures or dislocations
      Pain or discomfort associated with arthritis
      Pain or discomfort associated with osteoporosis
      `,
    },
    {
        label:`
        Irregular periods or bleeding between periods
        Painful periods or pelvic pain
        Pain during sexual intercourse
        Abnormal vaginal discharge or odor
        Itching, burning, or swelling in the vaginal area
        Vaginal dryness
        Pain or discomfort during urination
        Frequent urination or urgency to urinate
        Breast pain or lumps
        Menopause symptoms such as hot flashes, mood changes, and vaginal dryness
        Infertility or difficulty conceiving
        Suspected pregnancy or need for prenatal care
        Screening for sexually transmitted infections or cervical cancer`,
        value:`
        Irregular periods or bleeding between periods
        Painful periods or pelvic pain
        Pain during sexual intercourse
        Abnormal vaginal discharge or odor
        Itching, burning, or swelling in the vaginal area
        Vaginal dryness
        Pain or discomfort during urination
        Frequent urination or urgency to urinate
        Breast pain or lumps
        Menopause symptoms such as hot flashes, mood changes, and vaginal dryness
        Infertility or difficulty conceiving
        Suspected pregnancy or need for prenatal care
        Screening for sexually transmitted infections or cervical cancer`
    },
    {
        label:`
        Blurred vision
        Double vision
        Difficulty seeing objects up close or far away
        Eye strain or fatigue
        Headaches, especially after reading or using a computer
        Squinting or closing one eye to see more clearly
        Sensitivity to light
        Seeing halos around lights
        Redness or irritation in the eyes
        Dry eyes or excessive tearing
        Flashes of light or floating spots in the vision
        Changes in color perception
        Need for corrective lenses or adjustment of current glasses or contact lenses
        `,
        value:`
        Blurred vision
        Double vision
        Difficulty seeing objects up close or far away
        Eye strain or fatigue
        Headaches, especially after reading or using a computer
        Squinting or closing one eye to see more clearly
        Sensitivity to light
        Seeing halos around lights
        Redness or irritation in the eyes
        Dry eyes or excessive tearing
        Flashes of light or floating spots in the vision
        Changes in color perception
        Need for corrective lenses or adjustment of current glasses or contact lenses
        `
    },
    {
        label:`
        High fever
        Persistent cough or shortness of breath
        Chest pain or pressure
        Abdominal pain or discomfort
        Nausea or vomiting
        Diarrhea or constipation
        Blood in urine or stool
        Unexplained weight loss or gain
        Skin rash or discoloration
        Chronic fatigue or weakness
        Headaches or migraines
        Joint pain or stiffness
        Neurological symptoms such as dizziness, fainting, seizures, or confusion
        Emotional or mental health concerns such as anxiety, depression, or substance abuse.
        `,
        value:`
        High fever
        Persistent cough or shortness of breath
        Chest pain or pressure
        Abdominal pain or discomfort
        Nausea or vomiting
        Diarrhea or constipation
        Blood in urine or stool
        Unexplained weight loss or gain
        Skin rash or discoloration
        Chronic fatigue or weakness
        Headaches or migraines
        Joint pain or stiffness
        Neurological symptoms such as dizziness, fainting, seizures, or confusion
        Emotional or mental health concerns such as anxiety, depression, or substance abuse.
        `
    }
  ];
  return (
    <>
      <Layout>
        <h4>Hey,user Select the symtoms that you are facing.</h4>
        <Checkbox.Group
          options={options}
          defaultValue={["1"]}
          onChange={(event) => handleCheckboxChange(event, index)}
        />
       
        <br />
        
        
      </Layout>
    </>
  );
};

export default RecommendDoctor;
