/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOwnedProject = /* GraphQL */ `
  subscription OnCreateOwnedProject($owner: String!) {
    onCreateOwnedProject(owner: $owner) {
      id
      prevProject
      nextProject
      permalink
      title
      notesCount
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onImportOwnedProjects = /* GraphQL */ `
  subscription OnImportOwnedProjects($owner: String!) {
    onImportOwnedProjects(owner: $owner) {
      owner
      items {
        id
        prevProject
        nextProject
        permalink
        title
        notesCount
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const onUpdateOwnedProject = /* GraphQL */ `
  subscription OnUpdateOwnedProject($owner: String!) {
    onUpdateOwnedProject(owner: $owner) {
      id
      prevProject
      nextProject
      permalink
      title
      notesCount
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteOwnedProject = /* GraphQL */ `
  subscription OnDeleteOwnedProject($owner: String!) {
    onDeleteOwnedProject(owner: $owner) {
      id
      prevProject
      nextProject
      permalink
      title
      notesCount
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onAssignNote = /* GraphQL */ `
  subscription OnAssignNote($assignee: String!) {
    onAssignNote(assignee: $assignee) {
      id
      projectID
      prevNote
      nextNote
      permalink
      note
      isDone
      task
      description
      steps
      due
      watcher
      tag
      sprint
      status
      createdAt
      updatedAt
      owner
      assignee
    }
  }
`;
export const onDisallowNote = /* GraphQL */ `
  subscription OnDisallowNote($assignee: String!) {
    onDisallowNote(assignee: $assignee) {
      id
      projectID
      prevNote
      nextNote
      permalink
      note
      isDone
      task
      description
      steps
      due
      watcher
      tag
      sprint
      status
      createdAt
      updatedAt
      owner
      assignee
    }
  }
`;
export const onUpdateAssignedNoteByProjectID = /* GraphQL */ `
  subscription OnUpdateAssignedNoteByProjectID(
    $projectID: ID!
    $assignee: String!
  ) {
    onUpdateAssignedNoteByProjectID(
      projectID: $projectID
      assignee: $assignee
    ) {
      id
      projectID
      prevNote
      nextNote
      permalink
      note
      isDone
      task
      description
      steps
      due
      watcher
      tag
      sprint
      status
      createdAt
      updatedAt
      owner
      assignee
    }
  }
`;
export const onDeleteAssignedNoteByProjectID = /* GraphQL */ `
  subscription OnDeleteAssignedNoteByProjectID(
    $projectID: ID!
    $assignee: String!
  ) {
    onDeleteAssignedNoteByProjectID(
      projectID: $projectID
      assignee: $assignee
    ) {
      id
      projectID
      prevNote
      nextNote
      permalink
      note
      isDone
      task
      description
      steps
      due
      watcher
      tag
      sprint
      status
      createdAt
      updatedAt
      owner
      assignee
    }
  }
`;
export const onCreateOwnedNoteByProjectID = /* GraphQL */ `
  subscription OnCreateOwnedNoteByProjectID($projectID: ID!) {
    onCreateOwnedNoteByProjectID(projectID: $projectID) {
      id
      projectID
      prevNote
      nextNote
      permalink
      note
      isDone
      task
      description
      steps
      due
      watcher
      tag
      sprint
      status
      createdAt
      updatedAt
      owner
      assignee
    }
  }
`;
export const onUpdateOwnedNoteByProjectID = /* GraphQL */ `
  subscription OnUpdateOwnedNoteByProjectID($projectID: ID!) {
    onUpdateOwnedNoteByProjectID(projectID: $projectID) {
      id
      projectID
      prevNote
      nextNote
      permalink
      note
      isDone
      task
      description
      steps
      due
      watcher
      tag
      sprint
      status
      createdAt
      updatedAt
      owner
      assignee
    }
  }
`;
export const onDeleteOwnedNoteByProjectID = /* GraphQL */ `
  subscription OnDeleteOwnedNoteByProjectID($projectID: ID!) {
    onDeleteOwnedNoteByProjectID(projectID: $projectID) {
      id
      projectID
      prevNote
      nextNote
      permalink
      note
      isDone
      task
      description
      steps
      due
      watcher
      tag
      sprint
      status
      createdAt
      updatedAt
      owner
      assignee
    }
  }
`;
export const onCreateCommentByNoteID = /* GraphQL */ `
  subscription OnCreateCommentByNoteID($noteID: ID!) {
    onCreateCommentByNoteID(noteID: $noteID) {
      id
      noteID
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCommentByNoteID = /* GraphQL */ `
  subscription OnUpdateCommentByNoteID($noteID: ID!) {
    onUpdateCommentByNoteID(noteID: $noteID) {
      id
      noteID
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCommentByNoteID = /* GraphQL */ `
  subscription OnDeleteCommentByNoteID($noteID: ID!) {
    onDeleteCommentByNoteID(noteID: $noteID) {
      id
      noteID
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
