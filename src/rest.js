import Axios from 'axios';

export default {
  getRemindList : () => {
    return Axios.get('http://skoleni.modrybrouk.cz/react/remindme/api/notice/');
  }
}
