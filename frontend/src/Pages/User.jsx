import React from 'react'

import {Text,Input,Button} from "@chakra-ui/react";
import styles from "./User.module.css";
import Layout from '../Components/Layout';

const User = () => {

  return (
    <div className={styles.parent}>
        <div>
            <Text>User</Text>
        </div>
        <div>
            <Input type="number" placeholder="Enter number of seats to be booked"></Input>
        </div>
        <div>
             <Button _hover={{bg:"blue"}}>Submit</Button>
        </div>
        <div>
            <Text>Layout</Text>
            <Layout/>
        </div>
    </div>
  )
}

export default User