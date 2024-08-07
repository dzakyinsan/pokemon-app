import { useContext, useEffect } from "react";
import { renderRoutes } from "react-router-config";
import { Layout as BaseLayout, Col, Row } from "antd";
import { object } from "prop-types";

import Sidebar from "../Sidebar";
import Header from "../Header";
import MainContext from "../../context/mainContext";
import "./style.scss";

const Layout = ({ route }: any) => {
  const { dispatch } = useContext(MainContext);

  useEffect(() => {
    localStorage.getItem("myPokemons") ? dispatch({ type: "add-pokemon" }) : localStorage.setItem("myPokemons", JSON.stringify([]));
    localStorage.getItem('profile') ? dispatch({ type: "add-profile" }) : localStorage.setItem("profile", JSON.stringify({}))
    localStorage.getItem('tour') ? dispatch({ type: "tour", payload: localStorage.getItem('tour') }) : localStorage.setItem("tour", 'true')
  }, []);

  return (
    <>
      <Header />
      <Row justify={"center"} className="main-content">
        <Col span={24} xl={20}>
          <BaseLayout hasSider className="main-layout">
            <Sidebar />
            <BaseLayout className="layout">
              <BaseLayout.Content className="content">{renderRoutes(route.routes)}</BaseLayout.Content>
            </BaseLayout>
          </BaseLayout>
        </Col>
      </Row>
    </>
  );
};

Layout.propTypes = {
  route: object,
};

export default Layout;
