import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCRE } from "../../../redux/feature/CRE/CREThunk";

const EmployeeAddForm = () => {
  const dispatch = useDispatch();

  const iniatial = {
    department: "",
    designation: "",
    name: "",
    personalMobile: "",
    OfficialMobile: "",
    PersonalEmail: "",
    CurrentAddress: "",
    PermanantAddress: "",
    Dateofjoining: "",
    Salaryonjoining: "",
    LocalGuardiansRelation: "",
    GuardianName: "",
    EmergencyNumber: "",
    BankNameBranch: "",
    IFSCCode: "",
    AccountNumber: "",
    OfficialEmail: "",
    PasswordForlogin: "",
  };
  const [formData, setFormData] = useState(iniatial);

  console.log(formData);

  const handleSaveEmployee = async (e) => {
    e.preventDefault();
    try {
      if (formData?.department == "cre") {
        const res = dispatch(createCRE(formData));
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form className="p-4 border rounded bg-light" onSubmit={handleSaveEmployee}>
      <Row>
        <Col md={6}>
          <Form.Group controlId="department">
            <Form.Label>Choose Department</Form.Label>
            <Form.Select
              name="emp_type"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, department: e.target.value }))
              }
            >
              <option>--Choose Department--</option>
              <option value="cre">CRE</option>
              <option value="oe">OE</option>
              <option value="emp">Telemarketer</option>
              <option value="freelancer">Telecaller</option>
              <option value="HR">HR</option>
              <option value="OA">OA</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="designation">
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type="text"
              name="designation"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  designation: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter ..."
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="mobile">
            <Form.Label>Personal Mobile</Form.Label>
            <Form.Control
              type="number"
              name="mobile"
              placeholder="Enter ..."
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  personalMobile: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="o_mobile">
            <Form.Label>Official Mobile</Form.Label>
            <Form.Control
              type="number"
              name="o_mobile"
              placeholder="Enter ..."
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  OfficialMobile: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="email">
            <Form.Label>Personal Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter ..."
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  PersonalEmail: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="curr_addr">
            <Form.Label>Current Address</Form.Label>
            <Form.Control
              type="text"
              name="curr_addr"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  CurrentAddress: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="per_addr">
            <Form.Label>Permanant Address</Form.Label>
            <Form.Control
              type="text"
              name="per_addr"
              placeholder="Enter ..."
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  PermanantAddress: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="doj">
            <Form.Label>Date of joining</Form.Label>
            <Form.Control
              type="text"
              name="doj"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  Dateofjoining: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="soj">
            <Form.Label>Salary on joining</Form.Label>
            <Form.Control
              type="text"
              name="soj"
              placeholder="Enter ..."
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  Salaryonjoining: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="l_gard">
            <Form.Label>Local Guardians Relation</Form.Label>
            <Form.Control
              type="text"
              name="l_gard"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  LocalGuardiansRelation: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="gard_name">
            <Form.Label>Guardian Name</Form.Label>
            <Form.Control
              type="text"
              name="gard_name"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  GuardianName: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="gard_mob">
            <Form.Label>Emergency Number</Form.Label>
            <Form.Control
              type="text"
              name="gard_mob"
              placeholder="Enter ..."
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  EmergencyNumber: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="bank_name">
            <Form.Label>Bank Name & Branch</Form.Label>
            <Form.Control
              type="text"
              name="bank_name"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  BankNameBranch: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="ifsc_code">
            <Form.Label>IFSC Code</Form.Label>
            <Form.Control
              type="text"
              name="ifsc_code"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  IFSCCode: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="acc_number">
            <Form.Label>Account Number</Form.Label>
            <Form.Control
              type="text"
              name="acc_number"
              placeholder="Enter ..."
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  AccountNumber: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="username">
            <Form.Label>Official Email</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  OfficialEmail: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="password">
            <Form.Label>Password For login</Form.Label>
            <Form.Control
              type="text"
              name="password"
              placeholder="Enter ..."
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  PasswordForlogin: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Col>

        <Col md={12} className="text-end mt-3">
          <Button type="submit" style={{ backgroundColor: "#2B3A4A" }}>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default EmployeeAddForm;
