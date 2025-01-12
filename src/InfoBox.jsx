import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";


export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1733164847768-694d4bd1ecf7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL ="https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL ="https://plus.unsplash.com/premium_photo-1668792545377-49e3dc0257f0?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAINY_URL ="https://images.unsplash.com/photo-1697518725445-037f24d787b4?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <>
            <div className="InfoBox">
                <div className="card-container">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80?RAINY_URL:info.temp > 15?HOT_URL:COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{info.humidity>80?<ThunderstormIcon/>:info.temp > 15?<WbSunnyIcon/>:<AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                            <p>Temperature ={info.temp}&deg;C</p>
                            <p>Humidity ={info.humidity}</p>
                            <p>Max Temp ={info.tempmax}&deg;C</p>
                            <p>Min Temp ={info.tempmin}&deg;C</p>
                            <p>The weather is <i>{info.weather}</i> but feels like ={info.feelslike}</p>
                        </Typography>
                    </CardContent>
                </Card>
                </div>
            </div>
        </>
    )
}