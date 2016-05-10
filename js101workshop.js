var MessageBox = {
  create: function() {
    var messageBoxObject = document.createElement("div");
    messageBoxObject.setAttribute("class", "game-message");
    
    Object.defineProperty(messageBoxObject, "message", {
      get: function() {
        return this.innerHTML;
      },
      set: function(value) {
        this.innerHTML = value;
      }
    });
    
    Object.defineProperty(messageBoxObject, "messageOwner", {
      set: function(gamer) {
        this.setAttribute("class", this.getAttribute("class") + gamer.selector);
      }
    });
    
    return messageBoxObject;
  }
}

var Gamer = {
    NONE: {
      symbol: "",
      selector: "",
      onClickHandler: "this.cellOwner = Gamer.HUMAN",
      doOpponentTurn: function() {}
    },
    HUMAN: {
      symbol: "X",
      selector: " human-selected ",
      onClickHandler: "",
      doOpponentTurn: function() {
        for (var cellIndex = 0; cellIndex < Game.gameboard.cells.length; cellIndex++) {
          var gameCell = Game.gameboard.cells[cellIndex];
          if (!gameCell.isSelected) {
            gameCell.cellOwner = Gamer.COMPUTER;
            break;
          }
        }
      }
    },
    COMPUTER: {
      symbol: "O",
      selector: " computer-selected ",
      onClickHandler: "",
      doOpponentTurn: function() {}
    }
}

var GameCell = {
  create: function() {
    var gameCellObject = document.createElement("td");
    gameCellObject.setAttribute("class", "board-cell");

    Object.defineProperty(gameCellObject, "row", {
      value: 0,
      writable: true,
      enumerable: true,
      configurable: false
    });
    
    Object.defineProperty(gameCellObject, "col", {
      value: 0,
      writable: true,
      enumerable: true,
      configurable: false
    });
    
    Object.defineProperty(gameCellObject, "cellOwner", {
      get: function() {
        switch(this.innerHTML) {
          case Gamer.HUMAN.symbol:
            return Gamer.HUMAN;
          case Gamer.COMPUTER.symbol:
            return Gamer.COMPUTER;
        }
        return Gamer.NONE;
      },
      set: function(gamer) {
        this.setAttribute("class", this.getAttribute("class") + gamer.selector);
        this.setAttribute("onclick", gamer.onClickHandler);
        this.innerHTML = gamer.symbol;
        if (Game.checkWinner() == Gamer.NONE) {
          gamer.doOpponentTurn();
          Game.checkWinner();
        }
      }
    });
    
    Object.defineProperty(gameCellObject, "isSelected", {
      get: function() {
        return this.innerHTML != Gamer.NONE.symbol;
      }
    });
    
    gameCellObject.cellOwner = Gamer.NONE;
    
    return gameCellObject;
  }
}

var GameBoard = {
  ROWS_COUNT: 3,
  COLS_COUNT: 3,
  
  create: function() {
    var gameBoardObject = document.createElement("table");
    
    Object.defineProperty(gameBoardObject, "cells", {
      value: [],
      writable: true,
      enumerable: true,
      configurable: false
    });
    
    for (var row = 0; row < GameBoard.ROWS_COUNT; row++) {
      var tempHtmlElement = document.createElement("tr");
      for (var col = 0; col < GameBoard.COLS_COUNT; col++) {
        var gameCell = GameCell.create();
        gameCell.row = row;
        gameCell.col = col;
        gameBoardObject.cells.push(gameCell)
        tempHtmlElement.appendChild(gameCell);
      }
      gameBoardObject.appendChild(tempHtmlElement);
    }
    
    return gameBoardObject;
  }
}

var Game = {
  WIN_MASKS: [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ],
  messageBox: {},
  gameboard: {},
  
  start: function() {
    Game.messageBox = MessageBox.create();
    Game.messageBox.message = "Game started !";
    
    Game.gameboard = GameBoard.create();
    
    var gameboardContainer = document.getElementsByClassName("board")[0];
    gameboardContainer.appendChild(Game.messageBox);
    gameboardContainer.appendChild(Game.gameboard);
  },
  
  checkWinner: function() {
    var winner = Gamer.NONE;

    var cells = Game.gameboard.cells;
    if (cells != null) {
      for (var winIndex = 0; winIndex < Game.WIN_MASKS.length; winIndex++) {
        var winMask = Game.WIN_MASKS[winIndex];
        var cellOwner0 = cells[winMask[0]].cellOwner;
        var cellOwner1 = cells[winMask[1]].cellOwner;
        var cellOwner2 = cells[winMask[2]].cellOwner;
        if (cellOwner0 == cellOwner1 && cellOwner1 == cellOwner2) {
          winner = cellOwner0;
        }
      }
    }
    
    if (winner != Gamer.NONE) {
      Game.setWinner(winner);
    }
    return winner;
  },
  
  setWinner: function(gamer) {
    Game.messageBox.messageOwner = gamer;
    switch (gamer) {
      case Gamer.HUMAN:
        Game.messageBox.message = "Human wins !";
        break;
        
      case Gamer.COMPUTER:
        Game.messageBox.message = "Computer wins !";
        break;
    }
  }
}

Game.start();