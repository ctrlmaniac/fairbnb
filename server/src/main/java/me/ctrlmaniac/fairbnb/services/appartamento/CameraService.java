package me.ctrlmaniac.fairbnb.services.appartamento;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.fairbnb.entities.appartamento.Camera;
import me.ctrlmaniac.fairbnb.repositories.appartamento.CameraRepo;

@Service
public class CameraService {

	@Autowired
	CameraRepo CameraRepo;

	public Camera save(Camera o) {
		return CameraRepo.save(o);
	}
}
