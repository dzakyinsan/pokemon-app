import { Col, Row, Skeleton } from "antd";

const LoadingCard = () => {
  const LOADING_VARIABLES = [1, 2, 3, 4, 5, 6];

  return (
    <Row gutter={[16, 16]}>
      {LOADING_VARIABLES.map((val) => (
        <Col xs={24} sm={12} md={12} lg={8} key={val}>
          <Skeleton.Button active block size="large" />
        </Col>
      ))}
    </Row>
  );
};

export default LoadingCard;
