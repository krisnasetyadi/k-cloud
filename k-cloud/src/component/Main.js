import '../styles/App.css';
import NavBar from './NavBar';
import {Container} from 'react-bootstrap'
import AddFolder from './AddFolder';
import { useFolder } from '../folder/useFolder';
import Folderr from '../folder/folder';
import { useParams } from 'react-router-dom';
import FolderBreadcrumbs from '../folder/FolderBreadcrumbs';

function Main() {
  const { folderId } = useParams()
  const {folder, childFolders} = useFolder(folderId)
  console.log(childFolders)
  return (
    <>
     <NavBar/>
     <Container fluid>
     <div className='d-flex align-items-center'>
        <FolderBreadcrumbs currentFolder={folder}/>
        <AddFolder currentFolder={folder}/>
     </div>
     {childFolders.length > 0 && (
       <div className='d-flex flex-wrap'>
         {childFolders.map(childFolder=>(
           <div 
           key={childFolder.id} style={{maxWidth:'250px'}}
           className="p-2">
             <Folderr folder={childFolder} />
           </div>
         ))}
       </div>
     )}
     </Container>
    </>
  );
}

export default Main;
