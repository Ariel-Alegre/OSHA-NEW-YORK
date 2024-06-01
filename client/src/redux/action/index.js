import axios from "axios";






export const newEmployee = (formData) => {
    return async (dispatch) => {
      try {
        const response = await axios.post("https://osha-new-york-production.up.railway.app/employee", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        dispatch({ type: "CREATE_EMPLOYEE", payload: response.data });
      } catch (error) {
        console.error("Error uploading employee data:", error);
      }
    };
  };
  

  export const updateEmployee = (id, employee) => {
    return async(dispatch) => {
        try {
            const res = await axios.put(`https://osha-new-york-production.up.railway.app/employee/${id}`, employee);
            dispatch({
                type: "UPDATE_EMPLOYEE",
                payload: res.data
            });
            console.log("Employee updated:", res.data);
        } catch (error) {
            console.error("Error updating employee:", error);
        }
    };
};




export const employeeDetail = (card) => {
    return async(dispatch) => {
        const res = await axios.get(`https://osha-new-york-production.up.railway.app/employee/${card}`)
        const data = res.data 
        return dispatch({
            type: "DETAIL_EMPLOYEE",
            payload: data
        })
    }
};

export const loginEmployee = (payload) => {
    return async(dispatch) => {
        const res = await axios.post(`https://osha-new-york-production.up.railway.app/employee/login`, payload )
        const data = res.data 
        return dispatch({
            type: "LOGIN_EMPLOYEE",
            payload:  console.log(data)
        })
    }
};

export const allEmployee = () => {
    return async(dispatch) => {
        const res = await axios.get(`https://osha-new-york-production.up.railway.app/employee` )
        const data = res.data 
        return dispatch({
            type: "ALL_EMPLOYEE",
            payload: data
        })
    }
};

export const cardEmployee = (payload) => {
    return async(dispatch) => {
        const res = await axios.post(`https://osha-new-york-production.up.railway.app/target`, payload);
        const data = await res.data

        return dispatch({
            type: "CREATE_TARGET",
            payload: data

        })
    }
};

export const cardOrangeDetail = (target) => {
    return async(dispatch) => {
        const res = await axios.get(`https://osha-new-york-production.up.railway.app/target/${target}`);
        const data = res.data

        return dispatch({
            type: "DETAIL_CARD_ORANGE",
            payload: data

        })
    }
};

export const allCardOrangeDetail = () => {
    return async(dispatch) => {
        const res = await axios.get(`https://osha-new-york-production.up.railway.app/target`);
        const data = res.data

        return dispatch({
            type: "ALL_DETAIL_CARD_ORANGE",
            payload: data

        })
    }
};

export const Avatars = (payload) => {
    return async(dispatch) => {
        const res = await axios.post(`https://osha-new-york-production.up.railway.app/upload`, payload );
        const data = res.data

        return dispatch({
            type: "AVATAR_UPLOAD",
            payload: data

        })
    }
};





