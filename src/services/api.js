import Taro from '@tarojs/taro'
import { GET_ORGS } from '../confs/urls'

const getReposFromeOrgs = (orgName)=>{

     return Taro.request({
        url: `${ GET_ORGS }${orgName}/repos`,
        header: {
            'content-type': 'application/json'
        }
    })

};

export default  {
    getReposFromeOrgs
};
