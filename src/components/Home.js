import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  Flex,
  Grid,
  GridItem,
  Badge,
  Button,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { TbWindowMaximize } from "react-icons/tb";
import EmailPerformanceTable from "./EmailPerformanceTable";

const cardData = [
  {
    id: 1,
    heading: "Sent",
    data: "1,181",
    emailCount: "104 Emails",
  },
  {
    id: 2,
    heading: "Open rate",
    data: "8.8%",
    emailCount: "33 Opened",
  },
  {
    id: 3,
    heading: "Click rate",
    data: "1.1%",
    emailCount: "1 Clicked",
  },
  {
    id: 4,
    heading: "Click through",
    data: "11.21%",
    emailCount: "15 Check through",
  },
];

function Home() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className="main-container">
      <Grid
        h="500px"
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        w="90%"
      >
        <GridItem rowSpan={1} colSpan={4} className="delivery-item">
          <div className="main-title">
            <h1>Email Analytics</h1>
          </div>
          <Select placeholder="Last 30 Days" w="11%">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </GridItem>
        {cardData?.length > 0 &&
          cardData?.map((item) => (
            <GridItem colSpan={1} key={item?.id}>
              <div className="card">
                <div className="card-inner">
                  <h3>{item?.heading}</h3>
                  <TbWindowMaximize />
                </div>
                <Flex>
                  <h6>{item?.emailCount}</h6>
                  <Badge ml="1" colorScheme="green" borderRadius="0.5rem">
                    0.3%
                  </Badge>
                </Flex>
                <h1>{item?.data}</h1>
              </div>
            </GridItem>
          ))}
        {cardData?.length > 0 &&
          cardData?.map((item) => (
            <GridItem colSpan={1} key={item?.id}>
              <div className="card">
                <div className="card-inner">
                  <h3>{item?.heading}</h3>
                  <TbWindowMaximize />
                </div>
                <Flex>
                  <h6>{item?.emailCount}</h6>
                  <Badge ml="1" colorScheme="green" borderRadius="0.5rem">
                    0.3%
                  </Badge>
                </Flex>
                <h1>{item?.data}</h1>
                <BarChart
                  width={300}
                  height={150}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </div>
            </GridItem>
          ))}
        <GridItem rowSpan={1} colSpan={4} className="delivery-item">
          <h1>Delivery</h1>
          <Button colorScheme="blue" variant="outline">
            Save Report
          </Button>
        </GridItem>
        <GridItem colSpan={2} className="delivery-item">
          {/* <ResponsiveContainer width="100%" height="100%"> */}
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
          {/* </ResponsiveContainer> */}
        </GridItem>
        <GridItem colSpan={2} className="delivery-item">
          {/* <ResponsiveContainer width="100%" height="100%"> */}
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
          {/* </ResponsiveContainer> */}
        </GridItem>
        
      </Grid>
      <div style={{marginTop:"400px"}}>
        <EmailPerformanceTable/>
      </div>
    </main>
  );
}

export default Home;
