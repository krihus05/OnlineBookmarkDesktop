/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.krifhu.onlinebookmarkdesktop.domain;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Kristian
 */
@Entity
@Table(name = "desktops")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Desktops.findAll", query = "SELECT d FROM Desktops d")
    , @NamedQuery(name = "Desktops.findByDesktopID", query = "SELECT d FROM Desktops d WHERE d.desktopID = :desktopID")
    , @NamedQuery(name = "Desktops.findByTheme", query = "SELECT d FROM Desktops d WHERE d.theme = :theme")
    , @NamedQuery(name = "Desktops.findByBackgroundImage", query = "SELECT d FROM Desktops d WHERE d.backgroundImage = :backgroundImage")
    , @NamedQuery(name = "Desktops.findByBackgroundColor", query = "SELECT d FROM Desktops d WHERE d.backgroundColor = :backgroundColor")})
public class Desktops implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "DesktopID")
    private Integer desktopID;
    @Size(max = 100)
    @Column(name = "Theme")
    private String theme;
    @Size(max = 255)
    @Column(name = "Background_Image")
    private String backgroundImage;
    @Size(max = 100)
    @Column(name = "Background_Color")
    private String backgroundColor;
    @JoinColumn(name = "UserID", referencedColumnName = "UserID")
    @ManyToOne(optional = false)
    private Users userID;

    public Desktops() {
    }

    public Desktops(Integer desktopID) {
        this.desktopID = desktopID;
    }

    public Integer getDesktopID() {
        return desktopID;
    }

    public void setDesktopID(Integer desktopID) {
        this.desktopID = desktopID;
    }

    public String getTheme() {
        return theme;
    }

    public void setTheme(String theme) {
        this.theme = theme;
    }

    public String getBackgroundImage() {
        return backgroundImage;
    }

    public void setBackgroundImage(String backgroundImage) {
        this.backgroundImage = backgroundImage;
    }

    public String getBackgroundColor() {
        return backgroundColor;
    }

    public void setBackgroundColor(String backgroundColor) {
        this.backgroundColor = backgroundColor;
    }

    public Users getUserID() {
        return userID;
    }

    public void setUserID(Users userID) {
        this.userID = userID;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (desktopID != null ? desktopID.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Desktops)) {
            return false;
        }
        Desktops other = (Desktops) object;
        if ((this.desktopID == null && other.desktopID != null) || (this.desktopID != null && !this.desktopID.equals(other.desktopID))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.krifhu.onlinebookmarkdesktop.domain.Desktops[ desktopID=" + desktopID + " ]";
    }
    
}
