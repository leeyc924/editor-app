// import { accountSelector } from 'modules/accountSlice';
import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FiPlus as AddIcon } from 'react-icons/fi';

const GroupManage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <GroupWrap>
      <GroupFilterArea>
        필터링영역
      </GroupFilterArea>
      <GroupCardArea>
        <GroupCard>
          <AddBox onClick={() => setIsAddModalOpen(true)}>
            <AddIcon size={25} color={"#00A3FF"}/>
          </AddBox>
        </GroupCard>
        {[...Array(10)].map((a,index) => (
          <GroupCard key={index}>
          </GroupCard>
        ))}
      </GroupCardArea>
    </GroupWrap>
  );
};

const GroupWrap = styled.div`
  width: 600px;
  height: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GroupFilterArea = styled.div`
  height: 80px;
  border-bottom: 1px solid #dddddd;
`;

const GroupCardArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
`;

const AddBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const GroupCard = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid #dddddd;
  border-radius: 15px;
`;

export default GroupManage;
