import { dbService } from 'fbase';
import React, { useEffect, useState } from 'react';
import Taweet from "components/Taweet";
import TaweetFactory from 'components/TaweetFactory';

const Home =  ( { userObj }) => {
    const [taweets, setTaweets] = useState([]);
    useEffect(() => {
        dbService.collection("taweets").onSnapshot(snapshot =>{
            const taweetArray = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTaweets(taweetArray)
        });
    }, []);
    return (
        <div className="container">
            <TaweetFactory userObj={userObj} />
            <div style={{ marginTop: 30 }}>
                {taweets.map((taweet) =>( 
                    <Taweet 
                        key={taweet.id} 
                        taweetObj={taweet} 
                        isOwner={taweet.creatorId === userObj.uid}
                    />
                ))}
            </div>
        </div>
    );
    };
export default Home;