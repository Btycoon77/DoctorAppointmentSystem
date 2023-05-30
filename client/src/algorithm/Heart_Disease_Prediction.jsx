import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";
import Layout from "../components/Layout";
import { Col, Form, Input, Row} from "antd";


const HeartDiseasePrediction = () => {
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:8000/predict", values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const prediction = response.data.prediction;
      setPrediction(prediction);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Layout>
        <h1 className="text-center">Heart Disease Prediction</h1>
        <Form layout="vertical" onFinish={handleSubmit} className="m-3">
          <Row gutter={20}>
            <Col xs={24} md={24} lg={8}>
              <h4>Personal Health details:</h4>
              <Form.Item
                label="Age"
                name="age"
                required
                rules={[{ required: true }]}
              >
                <Input type="number" placeholder="enter your age" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="sex"
                name="sex"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="number"
                  placeholder="press 1 for male and 0 for female"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Smoker"
                name="smoker"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="number"
                  placeholder=" 0 for non-smoker and 1 for smoker"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Years"
                name="years"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="number"
                  placeholder="Enter years of smoking (0 if non-smoker"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Ldl"
                name="ldl"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="number"
                  placeholder="Enter LDL cholesterol level: "
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="chp"
                name="chp"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="number"
                  placeholder="Enter cardiac health profile:"
                />
              </Form.Item>
            </Col>

            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="height"
                name="height"
                required
                rules={[{ required: true }]}
              >
                <Input type="number" placeholder="Enter height in cm" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Weight"
                name="weight"
                required
                rules={[{ required: true }]}
              >
                <Input type="number" placeholder="Enter weight in kg:" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Family History"
                name="fh"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="number"
                  placeholder="Enter family history (0 for no family history, 1 for family history"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Active"
                name="active"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="number"
                  placeholder="Enter physical activity level (0 for sedentary, 1 for active"
                />
              </Form.Item>
            </Col>

           
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Lifestyle"
                name="lifestyle"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="number"
                  placeholder="Enter lifestyle 0 for unhealthy, 1 for healthy"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Ischemic Heart Disease"
                name="ihd"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="number"
                  placeholder="Enter history of ischemic heart disease 0 for no history, 1 for history"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Heart Rate"
                name="hr"
                required
                rules={[{ required: true }]}
              >
                <Input type="number" placeholder="Enter resting heart rate" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Diabetes status"
                name="dm"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="number"
                  placeholder="Enter diabetes status (0 for non-diabetic, 1 for diabetic): "
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Bpsys"
                name="bpsys"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="number"
                  placeholder="Enter systolic blood pressure "
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Bpdias"
                name="bpdias"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="number"
                  placeholder="Enter diastolic blood pressure "
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Hypertension status"
                name="htn"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="number"
                  placeholder="Enter hypertension status 0 for no hypertension, 1 for hypertension"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="IVSD"
                name="ivsd"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="number"
                  placeholder="Enter interventricular septal thickness:"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="ECGpatt"
                name="ecgpatt"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="number"
                  placeholder="Enter ECG pattern (0 for normal, 1 for abnormal"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Qwave"
                name="qwave"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="number"
                  placeholder="Enter presence of Q wave (0 for absent, 1 for present"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Target"
                name="target"
                required
                rules={[{ required: true }]}
              >
                <Input
                  type="number"
                  placeholder="Enter 1 for presence of heart diesease and 0 for absence "
                />
              </Form.Item>
            </Col>
          </Row>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary form-btn">Submit</button>
          </div>
        </Form>
        {prediction && (
          <div>
            {/* Display the prediction */}
            {prediction === 1 ? (
              <p>
                {message.warning(
                  "Based on the input,it is predicted that the user has heart disease"
                )}
                Based on the input, it is predicted that the user has heart
                disease.
              </p>
            ) : (
              <p>
                {message.success(
                  "Based on the input ,it is predicted that the user does not have heart diesease"
                )}
                Based on the input, it is predicted that the user does not have
                heart disease.
              </p>
            )}
          </div>
        )}
      </Layout>
    </>
  );
};

export default HeartDiseasePrediction;
