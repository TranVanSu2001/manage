import React from "react";
import TableSubject from "./TableSubject";

import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button } from "antd";

import {
  SubjectWrapper,
  SubjectTitle,
  SubjectContainer,
  ButtonAction,
} from "./style";

const Subject = () => {
  return (
    <SubjectWrapper>
      <SubjectTitle>Manage Subject</SubjectTitle>
      <ButtonAction>
        <Button type="primary" icon={<PlusOutlined />}>
          Add
        </Button>
      </ButtonAction>
      <SubjectContainer>
        <TableSubject />
      </SubjectContainer>
    </SubjectWrapper>
  );
};

export default Subject;
